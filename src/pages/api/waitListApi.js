import { getXataClient } from "../../xata";

// export default async function handler(req, res) {
//   const xata = getXataClient();
//   if (req.method == "GET") {
//     try {
//       const newData = await xata.db.waitlist.getPaginated();
//       console.log("New data created:", newData);
//       res.status(201).json(newData);
//     } catch (error) {
//       console.error("Error posting data to Xata:", error);
//       res.status(500).json({ error: "Failed to post data to Xata" });
//     }
//   } else
//     try {
//       const { email } = req.body;

//       if (!email) {
//         return res.status(400).json({ error: "Missing required fields" });
//       }

//       const newData = await xata.db.waitlist.create({
//         email,
//       });

//       console.log("New data created:", newData);
//       res.status(201).json(newData);
//     } catch (error) {
//       console.error("Error posting data to Xata:", error);
//       res.status(500).json({ error: "Failed to post data to Xata" });
//     }
// }

export default async function handler(req, res) {
  const xata = getXataClient();
  console.log(req.method);
  if (req.method == "GET") {
    try {
      const data = await xata.db.waitlist.getPaginated();
      res.status(200).json(data);
    } catch (error) {}
  } else
    try {
      const { email } = req.body;
      const data = await xata.db.waitlist.create({
        email,
      });
      console.log("datadatadatadatadata", data); // Replace 'tableName' with your actual table name
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
}
