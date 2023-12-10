import prisma from "@/lib/prisma";

type Props = {
    params: {
        id:string
    }
}

export const GET = async (req:Request, {params : {id}}: Props) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              id
            }
        });
        return new Response(JSON.stringify(user), {status:200})
    } catch(error:any) {
        console.log(error)
        return new Response(error, {status: 500})
    }
}