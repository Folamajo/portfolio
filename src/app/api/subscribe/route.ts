export const POST = async(request: Request)=> {
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
}   // return new Response("hello world")