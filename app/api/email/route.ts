import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail'

const key = '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'
// const key2 = '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'

sgMail.setApiKey(key)


export async function POST(params:NextRequest) {
    console.log('post called');
    
    const { targetEmailAddress, type, scheduledTime } = await params.json()
 
    console.log(targetEmailAddress, type, scheduledTime);
    const msg = {
        to: targetEmailAddress, // Change to your recipient
        from: '	eason@umatech.work', // Change to your verified sender
        subject: 'Your reservation is now confirmed',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Welcome to coding club shedule system</strong>
                <br>
                <p>This Email is sent to ${type}</p>
                <br>
                <p>The scheduled time is ${scheduledTime}</p>
                <br>
                <p>Thank you for your reservation!</p> 
        `,
      }
      const res = await sgMail.send(msg)
      // const res = [{statusCode:202}]
      if(res[0].statusCode === 202) {
        console.log('send success');
        
      }

    
    return new NextResponse(JSON.stringify(res)) 
    
}