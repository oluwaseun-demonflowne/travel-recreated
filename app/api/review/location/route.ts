import prisma from "@/lib/prisma";

interface CreateLocationReview {
    comment: string;
    userId: string;
    locationId: string;
  }

export const POST = async (req:Request,res:Response) => {
    const {comment,userId,locationId}= await req.json() as CreateLocationReview; 

    const checkUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
    });
    const checkPost = await prisma.locations.findUnique({
        where: {
          id: locationId,
        },
    });
    
    if(checkUser && checkPost) {
        try{
            await prisma.locationComment.create({
                data: {comment,userId,locationId}
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
