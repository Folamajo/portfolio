export const runtime = "nodejs";

const mailerLiteKey = process.env.MAILERLITE_API_KEY
const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID
const next_public_site_url = process.env.NEXT_PUBLIC_SITE_URL



export const POST = async(request: Request)=> {
   // Post route accepts data and validates the email data 
   // Returns value to the user
   // Resoponse returns an object and accepts two parameters a body which is usually a message we want to send to backend  and options
   const body = await request.json();
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const validateEmail = (email:string):boolean => {
      return emailRegex.test(email)
   }



   if (body.email && validateEmail(body.email)){

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