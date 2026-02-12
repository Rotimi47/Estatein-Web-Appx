
const { db } = require("../config/firebase");

const getAllProperties = async (req, res) => {
  try {
    const snapshot = await db.collection("properties").get();

    const properties = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Failed to fetch properties" });
  }
};

module.exports = { getAllProperties };
