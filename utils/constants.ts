export const isDev = process.env.NODE_ENV === "development";

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
         isDev 
            ? "https://buy.stripe.com/test_9AQeWi16pfMo8jC9AA" 
            : "https://buy.stripe.com/14k7w62yUevQetO149",
      priceId: 
         isDev 
            ? "price_1R9SBw2KihVeWaRzm3JqaoyE" 
            : "price_1RDsLuRxO0c6fpAjcAjHD07I",
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
         isDev 
            ? "https://buy.stripe.com/test_aEU3dA6qJfMo1VecMN" 
            : "https://buy.stripe.com/8wMaIigpKfzUetOdQU",
      priceId: 
         isDev 
            ? "price_1R9SBw2KihVeWaRz4QYfwKNR" 
            : "price_1RDsLuRxO0c6fpAjfrtnSIPQ",
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

export const ORIGIN_URL = isDev ? "http://localhost:3000" : "https://sum-mate-ai.vercel.app/";