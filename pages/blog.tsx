// Type '{ as: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>; key: any; variants: { slideOut: { scale: number; '--offsetY': string; opacity: number; transition: { ...; }; }; }; exit: string; type: "comment"; comment: any; commentsTotal: number | undefined; }' is not assignable to type 'IntrinsicAttributes & { type: "artist" | "comment"; comment: BackerData; coverImageSrc?: string | undefined; commentsTotal?: number | undefined; }'.
//   Property 'as' does not exist on type 'IntrinsicAttributes & { type: "artist" | "comment"; comment: BackerData; coverImageSrc?: string | undefined; commentsTotal?: number | undefined; }'.ts(2322)
// (JSX attribute) as: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>
// No quick fixes available

// const MotionCommentboxCard = motion(CommentboxCard);
// return (
// <MotionCommentboxCard
//   key={activeBacker[0]?.rank}
//   variants={variantsFrontcard}
//   exit={'slideOut'}
//   type="comment"
//   comment={activeBacker[0]}
//   commentsTotal={mintInfo?.quantity}
// />
// )

const Blog = () => {
  return <div>blog</div>;
};

export default Blog;
