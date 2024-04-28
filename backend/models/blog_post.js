const connection = require("../connection/sql_connection");
const insertBlogPost = async (
  title,
  description,
  thumbnail,
  Author,
  product_option,
  created_at
) => {
  try {
    const sqlCheck = `SELECT COUNT(*) AS table_exists FROM information_schema.tables WHERE table_name = 'blog_posts'`;
    let [rows] = await connection.execute(sqlCheck);
    
    // If the table does not exist, create it
    if (rows[0].table_exists === 0) {
      const createTableQuery = `
        CREATE TABLE blog_posts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          thumbnail VARCHAR(255) NOT NULL,
          author VARCHAR(255) NOT NULL,
          product_option VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      await connection.execute(createTableQuery);
      console.log('blog_posts table created');
    }
  
    const sql = `INSERT INTO blog_posts (title, description, thumbnail, Author, product_option, created_at) 
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;
    let result = await connection.execute(sql, [
      title,
      description,
      thumbnail,
      Author,
      product_option
    ]);
    console.log("Blog post successfully published");
    return result;
  } catch (error) {
    console.error("Error inserting product:", error);
    throw error; // Throw the error to handle it in the calling function or handle it here
  }
  
};

const getBlogPost = async () => {
  const sql = "SELECT * FROM blog_posts";
  const [rows] = await connection.execute(sql);
  return rows;
};

async function fetchBlogPost() {
  try {
    const blogPost = getBlogPost();
    return blogPost;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error appropriately
  }
}

module.exports = {
  insertBlogPost,
  fetchBlogPost
};
