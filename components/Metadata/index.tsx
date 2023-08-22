import { MetadataProps } from "@/utils/types/metadata";
import Head from "next/head";

function Metadata({ title, description }: MetadataProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
    </Head>
  );
}

export default Metadata;
