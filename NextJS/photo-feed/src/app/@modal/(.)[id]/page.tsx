import Modal from "@/components/Modal";
import PhotoDetail from "@/components/PhotoDetail";
import ReloadOnClick from "@/components/ReloadOnClick";
import { getPhotoById } from "@/lib/photo";
import { notFound, } from "next/navigation";

interface ModalPhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function ModalPhotoPage({ params }: ModalPhotoPageProps) {
  const photo = await getPhotoById((await params).id);

  if (!photo) {
    return notFound();
  }

  return (
    <Modal>
    <ReloadOnClick>
      <PhotoDetail photo={photo}/>
    </ReloadOnClick>
  </Modal>
  );
}


