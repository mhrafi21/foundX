import { getRecentPosts } from "@/src/services/RecentPosts"

const RecentPosts = async () => {

  const {data: posts} = await getRecentPosts();

  console.log(posts);


  return (
    <div>
      
      RecentPosts({posts?.length})
    
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts?.map((post) => (
        <div key={post.id} className="border-2 border-gray-200 p-4 mb-8">
          <h2>{post.title}</h2>

        </div>
      ))}
      </div>
    </div>
    
    </div>
  )
}

export default RecentPosts