"use client";

import { fetchPopular } from "@/actions";
import { ContentCard } from "@/components/cards/content-card";
import { ContentDetailsModal } from "@/components/content-details-modal";
import { Content } from "@/types";
import { Spinner } from "@nextui-org/react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

type InfiniteScrollContentProps = {
  initialContent: Content[] | undefined;
};

export function InfiniteScrollContent({
  initialContent,
}: InfiniteScrollContentProps) {
  const [content, setContent] = React.useState(initialContent);
  const [page, setPage] = React.useState(1);
  const [ref, inView] = useInView();

  async function loadMoreMovies() {
    const next = page + 1;
    const content = await fetchPopular({ page: next, type: "movie" });
    if (content?.length) {
      setPage(next);
      setContent((prev: Content[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...content,
      ]);
    }
  }

  React.useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  return (
    <>
      {content &&
        content.length > 0 &&
        content?.map((c) => (
          <ContentDetailsModal key={c.id} contentId={c.id}>
            <ContentCard key={c.id} content={c} />
          </ContentDetailsModal>
        ))}

      <div
        ref={ref}
        className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5"
      >
        <Spinner />
        <span className="sr-only">Cargando...</span>
      </div>
    </>
  );
}
