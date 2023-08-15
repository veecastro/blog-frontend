// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// // import { getCommentsData } from "../../data/comments";
// import Comment from "./Comment";
// import CommentForm from "./CommentForm";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   createNewComment,
//   deleteComment,
//   updateComment,
// } from "../../services/index/comments";
// import { toast } from "react-hot-toast";

// const CommentsContainer = ({
//   className,
//   loggedInUserId,
//   comments,
//   postSlug,
// }) => {
//   const queryClient = useQueryClient();
//   const userState = useSelector((state) => state.user);
//   const [affectedComment, setAffectedComment] = useState(null);

//   const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
//     useMutation({
//       mutationFn: ({ token, description, slug, parent, replyOnUser }) => {
//         return createNewComment({ token, description, slug, parent, replyOnUser });
//       },
//       onSuccess: () => {
//         toast.success(
//           "Your comment is sent successfully, it will be visible after the confirmation of the Admin"
//         );
//       },
//       onError: (error) => {
//         toast.error(error.message);
//         console.log(error);
//       },
//     });

//   const { mutate: mutateUpdateComment } = useMutation({
//     mutationFn: ({ token, description, commentId }) => {
//       return updateComment({ token, description, commentId });
//     },
//     onSuccess: () => {
//       toast.success("Your comment is updated successfully");
//       queryClient.invalidateQueries(["blog", postSlug]);
//     },
//     onError: (error) => {
//       toast.error(error.message);
//       console.log(error);
//     },
//   });

//   const { mutate: mutateDeleteComment } = useMutation({
//     mutationFn: ({ token, description, commentId }) => {
//       return deleteComment({ token, commentId });
//     },
//     onSuccess: () => {
//       toast.success("Your comment is deleted successfully");
//       queryClient.invalidateQueries(["blog", postSlug]);
//     },
//     onError: (error) => {
//       toast.error(error.message);
//       console.log(error);
//     },
//   });

//   const addCommentHandler = (value, parent = null, replyOnUser = null) => {
//     mutateNewComment({
//       description: value,
//       parent,
//       replyOnUser,
//       token: userState.userInfo.token,
//       slug: postSlug,
//     });
//     setAffectedComment(null);
//   };

//   const updateCommentHandler = (value, commentId) => {
//     mutateUpdateComment({
//       token: userState.userInfo.token,
//       description: value,
//       commentId,
//     });
//     setAffectedComment(null);
//   };

//   const deleteCommentHandler = (commentId) => {
//     mutateDeleteComment({ token: userState.userInfo.token, commentId });
//   };

//   return (
//     <div className={`${className}`}>
//       <CommentForm
//         btnLabel="Send"
//         formSubmitHandler={(value) => addCommentHandler(value)}
//         loading={isLoadingNewComment}
//       />
//       <div className="space-y-4 mt-8">
//         {comments.map((comment) => (
//           <Comment
//             key={comment._id}
//             comment={comment}
//             logginedUserId={loggedInUserId}
//             affectedComment={affectedComment}
//             setAffectedComment={setAffectedComment}
//             addComment={addCommentHandler}
//             updateComment={updateCommentHandler}
//             deleteComment={deleteCommentHandler}
//             replies={comment.replies}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentsContainer;