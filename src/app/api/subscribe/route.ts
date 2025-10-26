export const runtime = "nodejs";

const mailerLiteApiKey = process.env.MAILERLITE_API_KEY
const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID
const nextPublicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL


type subscribeStatusType = "pending" | "active"
let subscribeStatus : subscribeStatusType;


process.env.MAILERLITE_SUBSCRIBE_STATUS === "pending" || process.env.MAILERLITE_SUBSCRIBE_STATUS === "active" ? subscribeStatus = process.env.MAILERLITE_SUBSCRIBE_STATUS : subscribeStatus = "pending"
   





export const POST = async(request: Request)=> {
   // Post route accepts data and validates the email data 
   // Returns value to the user
   // Resoponse returns an object and accepts two parameters a body which is usually a message we want to send to backend  and options

   //Guard against missing config 
   if (!mailerLiteApiKey || !mailerLiteGroupId){
      return new Response(
         JSON.stringify({message: "Server misconfiguration: missing env vars"}),
         {status: 500}
      )

   }
   const body = await request.json();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const validateEmail = (email:string):boolean => {
      return emailRegex.test(email)
   };


   async function subscribe(payload: {email: string, groups: string[], status: "pending" | "active"}){



      const url = "https://connect.mailerlite.com/api/subscribers"
         
      try {
         const response = await fetch(url, {
            method : "POST",
            headers : {
               "Content-Type" : "application/json",
               "Accept" : "application/json",
               "Authorization" : `Bearer ${mailerLiteApiKey}`
            },
            body : JSON.stringify(payload)
         })

         // if (!response.ok){
         //    return {ok : false, code: 500, message: "Request failed!" } 
         // }


         // const result = await response.json()
         if(response.status === 201){
            return {ok : true, code : 201, message : "Subscribed!" }
         }

         if (response.status === 200 || response.status === 422){
            return { ok : true, code : 200, message : "Already subscribed" }
         }

         if( response.status === 400){
            return {ok : false, code : 400,  message : "Unexpected request error"}
         }
         if(response.status >= 500 && response.status <= 599) {
            return {ok : false, code : response.status, message: "MailerLite server error "}
         }
         else{
            return {ok: false, code : response.status, message: "Upstream error" }
         }
     

      } catch(error){
         return {ok: false, code: 502, message : "MailerLite unreachable"}
      }
   }



   if (body.email && validateEmail(body.email)){
      const normalisedEmail = body.email.trim().toLowerCase()
      const subscriptionPayload = {
         email : normalisedEmail,
         groups : [mailerLiteGroupId],
         status : subscribeStatus
      }


      const result = await subscribe(subscriptionPayload)

      // return new Response(result?.message)
      return new Response( 
         JSON.stringify({ok: result?.ok, message : result?.message, email : subscriptionPayload.email}), 
         {
            status : result?.code,
            headers : { "Content-Type": "application/json"}            
         }
      )
   } else {
      return new Response(JSON.stringify({ok: false, code: 400, message: "Invalid email", email : body.email}), {
         status: 400
      })
   }
}   