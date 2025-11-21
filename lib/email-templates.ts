import { formatPrice, formatShippingAddress } from "./order-utils"

interface OrderDetails {
  orderCode: string
  customerEmail: string
  customerName?: string
  productName: string
  quantity: number
  amount: number
  shippingAddress: {
    line1?: string | null
    line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
  }
  phone?: string | null
}

/**
 * Customer confirmation email template
 */
export function getCustomerConfirmationEmail(order: OrderDetails): { subject: string; html: string; text: string } {
  const formattedAddress = formatShippingAddress(order.shippingAddress)
  
  return {
    subject: `Order Confirmation - ${order.orderCode}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .order-code { font-size: 24px; font-weight: bold; color: #667eea; margin: 20px 0; }
    .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
    .detail-label { font-weight: bold; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
    .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Order Confirmed!</h1>
      <p>Thank you for your purchase</p>
    </div>
    
    <div class="content">
      <p>Hi${order.customerName ? ` ${order.customerName}` : ''},</p>
      <p>Your order has been confirmed and will be shipped soon!</p>
      
      <div class="order-code">
        Order #${order.orderCode}
      </div>
      
      <div class="details">
        <h3>Order Details</h3>
        <div class="detail-row">
          <span class="detail-label">Product:</span>
          <span>${order.productName}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Quantity:</span>
          <span>${order.quantity}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Total:</span>
          <span><strong>${formatPrice(order.amount)}</strong></span>
        </div>
      </div>
      
      <div class="details">
        <h3>Shipping Address</h3>
        <p style="white-space: pre-line;">${formattedAddress}</p>
        ${order.phone ? `<p><strong>Phone:</strong> ${order.phone}</p>` : ''}
      </div>
      
      <p>We'll send you another email with tracking information once your order ships.</p>
      
      <p>Questions? Reply to this email or contact us at support@thewashbuckler.com</p>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} The Washbuckler™. All rights reserved.</p>
      <p>Made with ❤️ for a cleaner, drier kitchen</p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Order Confirmation - ${order.orderCode}

Hi${order.customerName ? ` ${order.customerName}` : ''},

Your order has been confirmed and will be shipped soon!

Order #${order.orderCode}

ORDER DETAILS:
- Product: ${order.productName}
- Quantity: ${order.quantity}
- Total: ${formatPrice(order.amount)}

SHIPPING ADDRESS:
${formattedAddress}
${order.phone ? `Phone: ${order.phone}` : ''}

We'll send you another email with tracking information once your order ships.

Questions? Reply to this email or contact us at support@thewashbuckler.com

© ${new Date().getFullYear()} The Washbuckler™. All rights reserved.
    `
  }
}

/**
 * Admin notification email template
 */
export function getAdminNotificationEmail(order: OrderDetails): { subject: string; html: string; text: string } {
  const formattedAddress = formatShippingAddress(order.shippingAddress)
  
  return {
    subject: `🎉 New Order: ${order.orderCode}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .order-code { font-size: 24px; font-weight: bold; color: #10b981; margin: 20px 0; }
    .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .detail-row { padding: 8px 0; border-bottom: 1px solid #eee; }
    .detail-label { font-weight: bold; color: #666; }
    .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>💰 New Order Received!</h1>
    </div>
    
    <div class="content">
      <div class="order-code">
        Order #${order.orderCode}
      </div>
      
      <div class="highlight">
        <strong>⚡ Action Required:</strong> Prepare order for shipment
      </div>
      
      <div class="details">
        <h3>Order Details</h3>
        <div class="detail-row">
          <div class="detail-label">Product</div>
          <div>${order.productName} × ${order.quantity}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">Amount Paid</div>
          <div><strong>${formatPrice(order.amount)}</strong></div>
        </div>
      </div>
      
      <div class="details">
        <h3>Customer Information</h3>
        <div class="detail-row">
          <div class="detail-label">Email</div>
          <div>${order.customerEmail}</div>
        </div>
        ${order.customerName ? `
        <div class="detail-row">
          <div class="detail-label">Name</div>
          <div>${order.customerName}</div>
        </div>
        ` : ''}
        ${order.phone ? `
        <div class="detail-row">
          <div class="detail-label">Phone</div>
          <div>${order.phone}</div>
        </div>
        ` : ''}
      </div>
      
      <div class="details">
        <h3>Shipping Address</h3>
        <p style="white-space: pre-line;">${formattedAddress}</p>
      </div>
      
      <p style="color: #666; font-size: 14px; margin-top: 30px;">
        View full details in your <a href="https://dashboard.stripe.com" style="color: #667eea;">Stripe Dashboard</a>
      </p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
NEW ORDER RECEIVED!

Order #${order.orderCode}

⚡ ACTION REQUIRED: Prepare order for shipment

ORDER DETAILS:
- Product: ${order.productName} × ${order.quantity}
- Amount Paid: ${formatPrice(order.amount)}

CUSTOMER INFORMATION:
- Email: ${order.customerEmail}
${order.customerName ? `- Name: ${order.customerName}` : ''}
${order.phone ? `- Phone: ${order.phone}` : ''}

SHIPPING ADDRESS:
${formattedAddress}

View full details in your Stripe Dashboard: https://dashboard.stripe.com
    `
  }
}

