import prisma from "@/lib/prisma";

interface CreateCarReview {
    comment: string;
    userId: string;
    carId: string;
  }

export const POST = async (req:Request,res:Response) => {
    const {comment,userId,carId}= await req.json() as CreateCarReview; 

    const checkUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
    });
    const checkPost = await prisma.cars.findUnique({
        where: {
          id: carId,
        },
    });
    if(checkUser && checkPost) {
        try{
            await prisma.carComment.create({
                data: {comment,userId,carId}
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
