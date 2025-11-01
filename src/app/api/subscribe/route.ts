export const runtime = "nodejs";

const mailerLiteApiKey = process.env.MAILERLITE_API_KEY
const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID
const mailerLiteFormId  = process.env.MAILERLITE_FORM_ID


type subscribeStatusType = "pending" | "active"
let subscribeStatus : subscribeStatusType;


process.env.MAILERLITE_SUBSCRIBE_STATUS === "pending" || process.env.MAILERLITE_SUBSCRIBE_STATUS === "active" ? subscribeStatus = process.env.MAILERLITE_SUBSCRIBE_STATUS : subscribeStatus = "pending"
   





export const POST = async(request: Request)=> {
   if(request){
      console.log("request recieved")
   }

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


   async function subscribe(payload: {email: string, groups: string[], }){



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
    
      }


      const result = await subscribe(subscriptionPayload)
      console.log(result)


      return new Response( 
         JSON.stringify({ok: result?.ok, code: result.code, message : result?.message, email : subscriptionPayload.email}), 
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






