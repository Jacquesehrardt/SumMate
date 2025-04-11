export const pricingPlans = [
   {
      id: "basic",
      name: "Basic",
      price: 9,
      description: "Perfect for occasional use",
      items: [
         "5 PDF summaries per month",
         "Standard processing speed",
         "Email support",
      ],
      paymentLink: 
         process.env.NODE_ENV === "development" 
            ? "https://buy.stripe.com/test_9AQeWi16pfMo8jC9AA"
            : "",
      priceId: 
      process.env.NODE_ENV === "development"
         ? "price_1R9SBw2KihVeWaRzm3JqaoyE"
         : "",
   },
   {
      id: "pro",
      name: "Pro",
      price: 19,
      description: "for professionals and teams",
      items: [
         "Unlimited PDF summaries",
         "Priority processing",
         "24/7 priority support",
         "Markdown Export",
      ],
      paymentLink: 
         process.env.NODE_ENV === "development"
            ? "https://buy.stripe.com/test_aEU3dA6qJfMo1VecMN"
            : "",
      priceId: 
         process.env.NODE_ENV === "development"
            ? "price_1R9SBw2KihVeWaRz4QYfwKNR"
            : "",
   },
];

export const containerVariants = {
   hidden: {opacity:0},
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
         delayChildren: 0.1,
      }
   }
}

export const itemVariants = {
   hidden: {
      opacity: 0, 
      y: 20
   },
   visible: {
      opacity: 1,
      transition: {
         type: 'spring',
         damping: 15,
         stiffness: 50,
         duration: 0.8,
      }
   }
}