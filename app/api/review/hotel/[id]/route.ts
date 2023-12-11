import prisma from '@/lib/prisma';

type Props = {
    params: {
        id:string
    }
}

export const GET = async (req:Request, {params : {id}}: Props) => {
        try{
            const hotelComment = await prisma.hotelComment.findMany({
                where: {
                  id: id,
                },
                include: {
                    personWhoCommented : true,
                }
            });
            return new Response(JSON.stringify(hotelComment), {status:200})
        }
        catch(error:any) {
            return new Response(error.message, {status:500})
        }
}