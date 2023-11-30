import prisma from "@/lib/prisma";

type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const locations = await prisma.locations.findMany({
            where: {
              locationAt: id,
            },
            // include: {
            //     personWhoCreatedPost : true,
            //     hotelComment: {
            //         include: {
            //           personWhoCommented: true
            //         }
            //     }
            // }
        });
        return new Response(JSON.stringify(locations), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}