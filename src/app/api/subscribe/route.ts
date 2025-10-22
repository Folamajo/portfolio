export const runtime = "nodejs";

const mailerLiteApiKey = process.env.MAILERLITE_API_KEY
const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID
const nextPublicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL



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





   if (body.email && validateEmail(body.email)){

      const subscriptionPayload = {
         email : body.email,
         groups : [mailerLiteGroupId]
      }

      async function subscribe(){
         const url = "https://connect.mailerlite.com/api/subscribers"
         try {
            const response = await fetch(url, {
               method : "POST",
               headers : {
                  "Content-Type" : "application/json",
                  "Accept" : "application/json",
                  "Authorization" : `Bearer ${mailerLiteApiKey}`
               },
               body : JSON.stringify(subscriptionPayload)
            })

            if (!response.ok){
               throw new Error(`Request failed with status ${response.status}`)
            }


            const result = await response.json()



            if(result)

            // console.log(result)
         } catch(error){
            console.log(error)
         }
      }

      subscribe()

      return new Response(
         JSON.stringify({message : "Email added", body}), 
         { status: 201 }
      )
   }



   else {
      return new Response(JSON.stringify({message: "Error: No email "}), {
         status: 400
      })
   }
}   