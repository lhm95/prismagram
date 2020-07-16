import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    // __ (doubleUnderScore) 는 부모의 arguments를 뜻함 그냥 args라고 적어도됨
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts;
      return {
        user: userProfile,
        posts
      };
    }
  }
};

// import { prisma } from "../../../../generated/prisma-client";
// import { USER_FRAGMENT } from "../../../fragments";

// export default {
//   Query: {
//     // __ (doubleUnderScore) 는 부모의 arguments를 뜻함 그냥 args라고 적어도됨
//     me: (_, __, { request, isAuthenticated }) => {
//       isAuthenticated(request);
//       const { user } = request;
//       return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);
//     }
//   }
// };
