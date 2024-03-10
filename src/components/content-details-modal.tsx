"use client";

import { ContentDetails } from "@/components/content-details";
import { Modal, useDisclosure } from "@nextui-org/react";

type ContentDetailsProps = {
  contentId: string;
  children: React.ReactNode;
};

export function ContentDetailsModal({
  contentId,
  children,
}: ContentDetailsProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="cursor-pointer">
        {children}
      </div>
      <Modal
        size="3xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ContentDetails contentId={contentId} />
      </Modal>
    </>
  );
}
