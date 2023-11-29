import prisma from "@/lib/prisma";

export const GET = async (req:Request,res:Response) => {
    try {
        const location = await prisma.locations.findMany();
        return new Response(JSON.stringify(location), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}