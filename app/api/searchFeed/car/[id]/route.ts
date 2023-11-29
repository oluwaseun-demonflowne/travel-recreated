import prisma from "@/lib/prisma";

type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const hotels = await prisma.cars.findMany({
            where: {
              location: id,
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
        return new Response(JSON.stringify(hotels), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}