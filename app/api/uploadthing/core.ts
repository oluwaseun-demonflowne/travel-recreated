import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    profilePhotoUpload: f({ 
      image: { maxFileCount: 1 },
    })
    .onUploadComplete(async ({ file }) => {
      return file
    }),
    carPicture: f({ image: { maxFileSize: "256MB", maxFileCount: 3 } })
    .onUploadComplete(async ({file }) => {
      return file
    }),
    locationPicture: f({ image: { maxFileSize: "256MB", maxFileCount: 3 } })
    .onUploadComplete(async ({file }) => {
      return file
    }),
    flightPicture: f({ image: { maxFileSize: "256MB", maxFileCount: 3 } })
    .onUploadComplete(async ({file }) => {
      return file
    }),
    hotelPicture: f({ image: { maxFileSize: "256MB", maxFileCount: 3 } })
    .onUploadComplete(async ({file }) => {
      return file
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;