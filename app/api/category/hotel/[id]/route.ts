import prisma from "@/lib/prisma";


type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const hotels = await prisma.hotels.findUnique({
            where: {
              id: id,
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
        console.log(hotels)
        return new Response(JSON.stringify(hotels), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}