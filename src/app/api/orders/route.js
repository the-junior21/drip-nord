import dbConnect from "@/lib/mongodb";
import Order from "@/models/order";

export async function POST(req) {
  try {
    await dbConnect(); // اتصال بقاعدة البيانات
    const data = await req.json();

    // إنشاء الطلب
    const order = new Order(data);
    await order.save();

    return new Response(
      JSON.stringify({ success: true, id: order._id }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
