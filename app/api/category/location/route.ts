import prisma from "@/lib/prisma";
import { Locations } from "@prisma/client";

export const POST = async (req:Request,res:Response) => {
    const {category,creator,image1,image2,image3,locationCaption,locationAt,
        price,language,freeCancel,day,group,tour,cancelFreely,
        activityType,title1,included1,title2,included2,title3,
        included3,overview,wifi,cleanBathroom,smoking,breakfast,gym,atm,swimming,city,
      }= await req.json() as Locations; 
    try {    
        await prisma.locations.create({
            data: {category,creator,image1,image2,image3,locationCaption,locationAt,
                price,language,freeCancel,day,group,tour,cancelFreely,
                activityType,title1,included1,title2,included2,title3,
                included3,overview,wifi,cleanBathroom,smoking,breakfast,gym,atm,swimming,city,
              }
        })
        return new Response("done", {status: 200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}


export const GET = async (req:Request,res:Response) => {
    try {
        const location = await prisma.locations.findMany();
        return new Response(JSON.stringify(location), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}