const  connection  = require("../connection/sql_connection");

const insertProduct = async (title, description, video, thumbnail ,product_option,product_link) => {
    try {
      const sql = 'INSERT INTO uploaded_products (title, description, video, thumbnail, timestamp, product_option,product_link) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?) ';
      console.log('SQL:', sql);
console.log('Values:', [title, description, video, thumbnail, product_option, product_link]);
      const result = await connection.execute(sql, [title, description, video, thumbnail, product_option, product_link]
        );
      console.log('Product inserted successfully');
      // You may return the inserted row ID or any other relevant information if needed
      return result; // This could be the inserted row ID or any other relevant data
    } catch (error) {
      console.error('Error inserting product:', error);
      throw error; // Throw the error to handle it in the calling function or handle it here
    }
  };
  

  const removeProduct = async (title, product_option) => {
    const sql = `DELETE FROM ${product_option} WHERE ${product_option}.title = ?`;
    await connection.execute(sql, [title]);
};


// Retrieve usernames and user IDs of connected users based on matching user_ids
const getProducts = async () => {
    const sql = 'SELECT * FROM uploaded_products';
    const [rows] = await connection.execute(sql);
    return rows;
};

// Call the function and await its result
async function fetchProducts() {
    try {
      const products = await getProducts();
      return products; // Return the fetched products if needed for further processing
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error appropriately
    }
  }

module.exports = {
    insertProduct,
    removeProduct,
    fetchProducts,
};

