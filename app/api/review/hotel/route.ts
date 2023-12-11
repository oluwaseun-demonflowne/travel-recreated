import prisma from "@/lib/prisma";

interface CreateHotelReview {
    comment: string;
    userId: string;
    hotelId: string;
  }

  type Props = {
    params: {
        id:string
    }
}

export const POST = async (req:Request,res:Response) => {
    const {comment,userId,hotelId}= await req.json() as CreateHotelReview; 

    const checkUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
    });
    const checkPost = await prisma.hotels.findUnique({
        where: {
          id: hotelId,
        },
    });
    
    if(checkUser && checkPost) {
        try{
            await prisma.hotelComment.create({
                data: {comment,userId,hotelId}
            })    
            return new Response("done", {status: 200})
        }
        catch(error:any) {
            return new Response(error.message, {status:500})
        }
    }
    if(!checkUser && !checkPost) {
        return new Response("Unknown error", {status: 400})
    }        
}




