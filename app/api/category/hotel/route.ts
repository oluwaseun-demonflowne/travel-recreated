import prisma from '@/lib/prisma';
import { Hotels } from '@prisma/client';





export const POST = async (req:Request,res:Response) => {
    const {category,creator,image1,image2,image3,hotelName,shortHotelDescription,location,
        price,guestNo,roomNo,privateBathNo,cancelFree,reserveNow,specialOffer,
        breakfast,romantic,airport,overview,wifi,star,hotelType,
        dedicated,checkIn,freeCancel,wifiIncluded,bathroom,smoking,breakfastIncluded,gym,atm,pool,city,
      }= await req.json() as Hotels; 
    try {    
        await prisma.hotels.create({
            data: {category,creator,image1,image2,image3,hotelName,shortHotelDescription,location,
                price,guestNo,roomNo,privateBathNo,cancelFree,reserveNow,specialOffer,
                breakfast,romantic,airport,overview,wifi,star,hotelType,
                dedicated,checkIn,freeCancel,wifiIncluded,bathroom,smoking,breakfastIncluded,gym,atm,pool,city,
              }
        })
        return new Response("done", {status: 200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}


export const GET = async (req:Request,res:Response) => {
    try {
        const hotels = await prisma.hotels.findMany();
        return new Response(JSON.stringify(hotels), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}
