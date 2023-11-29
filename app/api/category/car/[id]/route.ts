import prisma from "@/lib/prisma";

type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const cars = await prisma.cars.findUnique({
            where: {
              id: id,
            },
            // include: {
            //     personWhoCreatedPost : true,
            //     carComment: {
            //         include: {
            //           personWhoCommented: true
            //         }
            //     }
            // }
        });
        return new Response(JSON.stringify(cars), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}