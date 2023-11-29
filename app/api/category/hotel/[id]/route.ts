import prisma from "@/lib/prisma";


type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    console.log("hi")
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
        return new Response(JSON.stringify(hotels), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}