export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      brand,
      category,
      price,
      mrp,
      description,
      image,
    } = body;

    const result = await DB.prepare(
      `
      INSERT INTO products
      (name, brand, category, price, mrp, description, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    )
      .bind(
        name,
        brand,
        category,
        price,
        mrp,
        description,
        image
      )
      .run();

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}

export async function GET() {
  try {
    const products = await DB.prepare(
      "SELECT * FROM products ORDER BY id DESC"
    ).all();

    return Response.json(products.results);
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
