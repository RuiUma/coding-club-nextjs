import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail'

const key = process.env.SG_KEY||''

sgMail.setApiKey(key)

export async function POST(params:NextRequest) {
    console.log('post called');
    
    const { targetEmailAddress, type, scheduledTime } = await params.json()
 
    console.log(targetEmailAddress, type, scheduledTime);
    const msg = {
        to: targetEmailAddress, // Change to your recipient
        from: 'coding-club@coding-clubs.org', // Change to your verified sender
        subject: 'Your reservation is now confirmed',
        text: 'reservation confirmation email',
        html: `<strong>Welcome to coding club shedule system</strong>
                <br>
                <p>This Email is sent to ${type}</p>
                <br>
                <p>The scheduled time is ${scheduledTime}</p>
                <br>
                <p>Thank you for your reservation!</p> 
        `,
      }
      let res: any
      try {
        res = await sgMail.send(msg)
      } catch (error: any) {
        console.log(error);
        const err = error.response.body
        console.log(err);
        
        
      }
      
      // // const res = [{statusCode:202}]
      // if(res[0].statusCode === 202) {
      //   console.log('send success');
      // }

    
    return new NextResponse(JSON.stringify(res), {
      headers: {
        'content-type': 'application/json',
      },
      
    }) 
    
}