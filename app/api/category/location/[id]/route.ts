import prisma from "@/lib/prisma";


type Props = {
    params: {
        id:string
    }
}


export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const locations = await prisma.locations.findUnique({
            where: {
              id: id,
            },
            // include: {
            //     personWhoCreatedPost : true,
            //     locationComment: {
            //         include: {
            //           personWhoCommented: true
            //         }
            //     }
            // }
        });
        console.log(locations)
        return new Response(JSON.stringify(locations), {status:200})
    } catch(error:any) {
        return new Response(error, {status: 500})
    }
}