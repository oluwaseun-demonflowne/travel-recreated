import prisma from "@/lib/prisma";


export const PATCH = async (req:Request,res:Response) => {
    const {userId,firstName,lastName,phoneNumber,email,bio,livesIn,language,profilePhoto,coverPhoto}= await req.json() ; 

    try {
        const user = await prisma.user.findUnique({
            where: {
              id: userId,
            },
        });
        if(user) {
            await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    firstName:firstName === '' ? user.firstName : firstName,
                    lastName:lastName === '' ? user.lastName : lastName,
                    phoneNumber:phoneNumber === '' ? user.phoneNumber : phoneNumber,
                    email:email === '' ? user.email : email,
                    bio:bio === '' ? user.bio : bio,
                    livesIn:livesIn === '' ? user.livesIn : livesIn,
                    language:language === '' ? user.language : language,
                    profilePhoto:profilePhoto === '' ? user.profilePhoto : profilePhoto,
                    coverPhoto:coverPhoto === '' ? user?.coverPhoto : coverPhoto
                }
            })
            return new Response("done", {status: 200})
        }
        else {
            return new Response("User not found", {status: 404})
        }
    } catch (error) {
        console.log(error)
        return new Response("Unknown error", {status: 500})
    } 
}


// export const GET = async (req:Request,res:Response) => {
//     const prisma = new PrismaClient()
//     // try {
//     //     const posts = await create_post.find({}).populate('creator');
//     //     return new Response(JSON.stringify(posts), {status:200})
//     // } catch (error) {
//     //     return new Response("Failed to fetch personal profile", {status: 500})
//     // }
// }
