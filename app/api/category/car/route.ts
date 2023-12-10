import prisma from "@/lib/prisma";
import { Cars } from "@prisma/client";
  


export const POST = async (req:Request,res:Response) => {
    const {category,creator,carName,location,price,image1,image2,
        image3,passengerNo,luggageNo,trans,overview,duration,meetGreet,shuttle,
        size,wifi,fmRadio,airBag,powerWindows,sensor,speed,steering,safety}= await req.json() as Cars
    try {    
        await prisma.cars.create({
            data: {category,creator,carName,location,price,image1,image2,
                image3,passengerNo,luggageNo,trans,overview,duration,meetGreet,shuttle,
                size,wifi,fmRadio,airBag,powerWindows,sensor,speed,steering,safety}
        })
        return new Response("done", {status: 200});
    } catch(error: any) {
        console.log(error)
        return new Response(error, {status: 500})
    }
}


export const GET = async (req:Request,res:Response) => {
    try {
        const carPosts = await prisma.cars.findMany()
        return new Response(JSON.stringify(carPosts), {status:200})
      } catch (error:any) {
        return new Response(error, {status: 500})
      } 
}