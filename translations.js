/* ==================================================
   PETCARE SPA â€” i18n Localization System v1.0
   Languages: EN (English) | VI (Vietnamese)
   Frontend-only. Persists via localStorage('pcs_lang').
================================================== */

(function () {
  const T = {
    EN: {
      /* â”€â”€ NAVIGATION */
      'nav.home':       'Home',
      'nav.services':   'Services',
      'nav.about':      'About',
      'nav.shop':       'Shop',
      'nav.spa_bites': 'Spa Bites',
      'nav.membership': 'Membership',
      'nav.blog':       'Blog',
      'nav.contact':    'Contact',
      'nav.signin':   'Sign in',
      'nav.book':     'Book appointment',

      /* â”€â”€ FOOTER */
      'footer.tagline':      'Organic wellness, grooming, and handcrafted nutrition for modern pet families.',
      'footer.newsletter':   'Newsletter',
      'footer.email_ph':     'your@email.com',
      'footer.subscribe':    'Subscribe',
      'footer.col.contact':     'Contact',
      'footer.col.membership':  'Membership',
      'footer.col.navigate':    'Navigate',
      'footer.benefit.loyalty':   'Loyalty rewards',
      'footer.benefit.meals':     'Free meal upgrades',
      'footer.benefit.booking':   'Priority booking',
      'footer.benefit.wellness':  'Member-only wellness perks',
      'footer.cta.headline':  'Give your pet a healthier routine.',
      'footer.cta.btn1':      'Book Appointment',
      'footer.cta.btn2':      'Explore Spa Bites',
      'footer.trust.vet':          'Vet-approved',
      'footer.trust.organic':      'Organic ingredients',
      'footer.trust.delivery':     'Refrigerated delivery',
      'footer.trust.handcrafted':  'Handcrafted meals',
      'footer.copyright':    'Â© 2026 Petcare Spa. All rights reserved.',

      /* â”€â”€ HOME â€” HERO */
      'home.hero.eyebrow':      'Premium pet wellness',
      'home.hero.headline':     'Care that <em>truly</em><br>puts your pet first',
      'home.hero.sub':          'Personalized veterinary care, professional grooming, and curated wellness â€” all under one roof. Because modern pets deserve modern care.',
      'home.hero.btn1':         'Book consultation',
      'home.hero.btn2':         'Explore services',
      'home.hero.stat1_label':  'Licensed vets',
      'home.hero.stat2_label':  'Happy pets',
      'home.hero.stat3_label':  'Average rating',
      'home.hero.stat4_label':  'Response time',
      'home.hero.badge_title':  'Vet-certified care',
      'home.hero.badge_sub':    'All services reviewed by specialists',
      'home.hero.same_day':     'Same-day available',

      /* â”€â”€ HOME â€” TRUST BAR */
      'trust.1': 'Vet-Nutritionist Developed',
      'trust.2': 'AAFCO Compliant',
      'trust.3': 'Human-Grade Ingredients',
      'trust.4': 'USDA Quality Meats',

      /* â”€â”€ HOME â€” SERVICES SECTION */
      'home.svc.eyebrow':    'What we offer',
      'home.svc.headline':   'Every service your<br>pet will <em>love</em>',
      'home.svc.aside':      'Comprehensive care delivered with clinical precision and genuine warmth.',
      'svc.vet.name':        'Veterinary Care',
      'svc.vet.desc':        'Comprehensive examinations, diagnostics and treatment by board-certified veterinarians dedicated to your pet\'s long-term health.',
      'svc.vet.cta':         'Book now',
      'svc.grooming.name':   'Grooming & Spa',
      'svc.grooming.desc':   'Full-service grooming sessions with premium products â€” bath, style, nail care, and deep conditioning tailored to every coat type.',
      'svc.grooming.cta':    'Book now',
      'svc.vacc.name':       'Vaccination',
      'svc.vacc.desc':       'Structured immunization schedules designed by veterinarians, keeping your pet protected at every life stage with digital health records.',
      'svc.vacc.cta':        'Book now',
      'svc.surgery.name':    'Pet Surgery',
      'svc.surgery.desc':    'Elective and necessary surgical procedures performed in our modern, sterile facilities with full anaesthesia monitoring and post-operative support.',
      'svc.surgery.cta':     'Enquire',
      'svc.plans.name':      'Wellness Plans',
      'svc.plans.desc':      'Annual memberships covering preventive care, discounts, priority scheduling and quarterly health reviews. Wellness made simple.',
      'svc.plans.cta':       'View plans',
      'svc.nutrition.name':  'Nutrition Guidance',
      'svc.nutrition.desc':  'Bespoke dietary planning by veterinary nutritionists â€” from breed-specific needs to post-surgery recovery diets and weight management programs.',
      'svc.nutrition.cta':   'Learn more',

      /* â”€â”€ HOME â€” PHILOSOPHY */
      'home.phil.eyebrow':   'Our philosophy',
      'home.phil.headline':  'Wellness is a journey,<br>not an <em>event</em>',
      'home.phil.body':      'We believe pet health is built in small, consistent moments â€” the right food, the right checkups, the right environment. Our team brings a preventive-first approach that treats pets like the individuals they are.',
      'home.phil.p1_title':  'Preventive first',
      'home.phil.p1_text':   'Regular health screenings catch issues early, before they become costly or painful.',
      'home.phil.p2_title':  'Emotionally aware',
      'home.phil.p2_text':   'We understand that stressed pets don\'t heal well. Every visit is designed for calm.',
      'home.phil.p3_title':  'Personalized plans',
      'home.phil.p3_text':   'No two pets are the same. We build individual care plans around breed, age and lifestyle.',
      'home.phil.cta':       'Our approach',

      /* â”€â”€ HOME â€” PRODUCTS */
      'home.prod.eyebrow':   'Curated products',
      'home.prod.headline':  'The essentials, elevated',
      'home.prod.sub':       'Vet-recommended supplements, wellness kits and everyday care essentials.',
      'prod.tag1':           'Supplements',
      'prod.tag2':           'Grooming',
      'prod.tag3':           'Nutrition',
      'prod.tag4':           'Essentials',
      'home.prod.cta':       'View all products',

      /* â”€â”€ HOME â€” HOW IT WORKS */
      'home.how.eyebrow':      'Getting started',
      'home.how.headline':     'Care made simple',
      'home.how.sub':          'From your first visit to ongoing wellness â€” every step designed to be effortless.',
      'home.how.step1_title':  'Book a consultation',
      'home.how.step1_desc':   'Choose a service and time that works for you. Same-day slots available. A specialist confirms within the hour.',
      'home.how.step1_tag':    'Takes 2 minutes',
      'home.how.step2_title':  'Your personalized plan',
      'home.how.step2_desc':   'After your first visit, our vet team builds a tailored wellness roadmap â€” nutrition, checkup schedule, and care priorities.',
      'home.how.step2_tag':    'Fully personalized',
      'home.how.step3_title':  'Ongoing wellness support',
      'home.how.step3_desc':   'Track your pet\'s health over time, receive reminders, and access your vet team anytime through the app.',
      'home.how.step3_tag':    'Always with you',

      /* â”€â”€ HOME â€” TESTIMONIALS */
      'home.test.eyebrow':   'What pet parents say',
      'home.test.headline':  'Trusted by thousands',
      'home.test.sub':       'Real stories from real pet families across the city.',

      /* â”€â”€ HOME â€” FAQ */
      'home.faq.support_label': '24/7 Client Support',
      'home.faq.eyebrow':       'FAQ Experience',
      'home.faq.headline':      'Questions,<br>answered thoughtfully',
      'home.faq.body':          'We believe great pet care begins with clarity, transparency and calm communication. Here are answers to the questions pet parents ask most often.',
      'home.faq.cta_label':     'Need immediate assistance?',
      'home.faq.cta':           'Contact support',
      'home.faq.q1':            'What should I expect during my pet\'s first visit?',
      'home.faq.a1':            'Your first appointment includes a complete wellness review, behavioral observation, health consultation and personalized recommendations tailored to your pet\'s age and lifestyle.',
      'home.faq.q2':            'How does your grooming process reduce stress?',
      'home.faq.a2':            'We use low-noise tools, calm handling techniques and scheduled breaks to ensure anxious pets remain relaxed throughout the grooming experience.',
      'home.faq.q3':            'Do you provide personalized wellness plans?',
      'home.faq.a3':            'Yes. Every wellness plan is customized based on breed, activity level, age, nutrition and medical history.',
      'home.faq.q4':            'Can I stay updated during appointments?',
      'home.faq.a4':            'Absolutely. Our team provides updates, images and care notes throughout longer grooming or treatment sessions.',

      /* â”€â”€ HOME â€” CTA BAND */
      'home.cta.eyebrow':    'Ready to begin?',
      'home.cta.headline':   'Your pet\'s best<br>life starts <em>today</em>',
      'home.cta.sub':        'Join 12,000+ pet parents who trust Petcare Spa for every stage of their pet\'s wellness journey.',
      'home.cta.btn1':       'Book a consultation',
      'home.cta.btn2':       'View wellness plans',

      /* â”€â”€ PROMO POPUP */
      'promo.label':         'âœ¦ Special Offer',
      'promo.headline':      'Enjoy 20% off your<br>first grooming <em>session</em>',
      'promo.body':          'Join the Petcare Spa community for exclusive first-access offers and personalized wellness updates. New clients only.',
      'promo.cta':           'Claim my 20% off',
      'promo.skip':          'Maybe later',
      'promo.disable':       "Don't show again",
      'promo.media_pill':    'Welcome Â· 2026',

      /* â”€â”€ SERVICES PAGE */
      'svc_page.hero.accent':   'crafted with care',
      'svc_page.hero.eyebrow':  'Premium Pet Care',
      'svc_page.hero.headline': 'Premium wellness<br><em>for modern pets.</em>',
      'svc_page.hero.body':     'Organic nutrition, grooming, and wellness services designed around comfort, trust, and long-term health.',
      'svc_page.hero.btn1':     'Book Appointment',
      'svc_page.hero.btn2':     'Explore Spa Bites',
      'svc_page.hero.trust1':   'Vet approved',
      'svc_page.hero.trust2':   'Organic ingredients',
      'svc_page.hero.trust3':   'Refrigerated meals',
      'svc_page.stats.s1':      'Happy clients',
      'svc_page.stats.s2':      'Google rating',
      'svc_page.stats.s3':      'Of experience',
      'svc_page.stats.s4':      'Support available',
      'svc_page.grid.eyebrow':  'What we offer',
      'svc_page.grid.headline': 'Everything your pet needs',
      'svc_page.grid.sub':      'Six specialized services delivered by certified specialists in a calm, modern environment.',
      'svc_page.why.eyebrow':   'Why choose us',
      'svc_page.why.headline':  'Designed around comfort and trust',

      /* â”€â”€ WELLNESS PAGE */
      'wlns.hero.eyebrow':   'Wellness Programs',
      'wlns.hero.headline':  'Preventive care that <em>changes everything.</em>',
      'wlns.hero.body':      'A wellness plan isn\'t just a product â€” it\'s a commitment to your pet\'s long-term health. Built around your pet\'s individual needs, every plan includes expert checkups, nutrition guidance, and always-on support.',
      'wlns.hero.btn1':      'View plans',
      'wlns.hero.btn2':      'Talk to a specialist',
      'wlns.hero.badge':     'Vet-designed plans',
      'wlns.trust.s1':       'Pets enrolled',
      'wlns.trust.s2':       'Member rating',
      'wlns.trust.s3':       'Anytime',
      'wlns.intro.eyebrow':  'Our philosophy',
      'wlns.intro.headline': 'Wellness is a journey, <em>not a single visit.</em>',
      'wlns.plans.eyebrow':  'Membership plans',
      'wlns.plans.headline': 'Choose the right plan for your pet',
      'wlns.plans.sub':      'Every plan includes a dedicated wellness specialist, transparent pricing, and flexible month-to-month membership.',

      /* â”€â”€ SHOP PAGE */
      'shop.hero.eyebrow':   'Premium Pet Products',
      'shop.hero.headline':  'Curated essentials for healthier, happier pets.',
      'shop.hero.sub':       'Discover premium nutrition, wellness products, grooming essentials and modern accessories carefully selected by veterinary specialists.',
      'shop.hero.btn1':      'Shop now',
      'shop.hero.btn2':      'Browse categories',

      /* â”€â”€ BLOG PAGE */
      'blog.hero.eyebrow':   'The Petcare Spa Journal',
      'blog.hero.headline':  'Wellness stories,<br><em>expert insights.</em>',
      'blog.cats.all':       'All',
      'blog.cats.wellness':  'Wellness',
      'blog.cats.nutrition': 'Nutrition',
      'blog.cats.grooming':  'Grooming',
      'blog.cats.insights':  'Petcare Insights',
      'blog.cats.lifestyle': 'Lifestyle',
      'blog.latest.eyebrow': 'Latest Articles',
      'blog.latest.headline':'Fresh from the journal',

      /* â”€â”€ ABOUT PAGE */
      'abt.hero.eyebrow':    'Our Story',
      'abt.hero.headline':   'Built on love for <em>every animal.</em>',
      'abt.story.eyebrow':   'How it started',
      'abt.story.headline':  'A clinic born from <em>real passion.</em>',
      'abt.values.eyebrow':  'What guides us',
      'abt.values.headline': 'Values we build on every day',
      'abt.team.eyebrow':    'The people behind it',
      'abt.team.headline':   'Meet our specialists',
      'abt.team.sub':        'A team of certified professionals who share a deep passion for animal welfare and modern petcare.',
      'abt.metrics.s1':      'Happy pets cared for',
      'abt.metrics.s2':      'Of dedicated service',
      'abt.metrics.s3':      'Certified staff members',
      'abt.metrics.s4':      'Average client rating',

      /* â”€â”€ CONTACT PAGE */
      'cnt.hero.eyebrow':        'Get in touch',
      'cnt.hero.headline':       'We\'re here for you <em>and your pet.</em>',
      'cnt.hero.body':           'Whether you have a question, want to book an appointment, or just want to say hello â€” our team is always ready to help.',
      'cnt.form.name_label':     'Full name',
      'cnt.form.name_ph':        'Your full name',
      'cnt.form.email_label':    'Email address',
      'cnt.form.phone_label':    'Phone number',
      'cnt.form.pet_label':      'Pet type',
      'cnt.form.pet_ph':         'Select pet type',
      'cnt.form.subject_label':  'Subject',
      'cnt.form.subject_ph':     'How can we help?',
      'cnt.form.msg_label':      'Message',
      'cnt.form.msg_ph':         'Tell us about your pet and what you need...',
      'cnt.form.submit':         'Send message',
      'cnt.form.note':           'We\'ll respond within 4 business hours.',
      'cnt.hours.eyebrow':       'Opening hours',
      'cnt.hours.headline':      'Come visit <em>us anytime.</em>',

      /* â”€â”€ BOOKING PAGE */
      'bk.help':    'Need help?',
      'bk.back':    'Back to site',
      'bk.step1':   'Service',
      'bk.step2':   'Your Pet',
      'bk.step3':   'Date & Time',
      'bk.step4':   'Details',
      'bk.step5':   'Confirm',

      /* â”€â”€ POLICY PAGE */
      'plc.hero.eyebrow':    'Legal & Policies',
      'plc.hero.headline':   'Our policies,<br><em>clearly explained.</em>',

      /* â”€â”€ Spa Bites PAGE */
      'pm.hero.eyebrow':       'Spa Bites',
      'pm.hero.prehand':       'â€” freshly prepared, every batch',
      'pm.hero.headline':      'Real food,<br>made with <em>love.</em>',
      'pm.hero.sub':           'Handcrafted from organic, human-grade ingredients. Vet-formulated for balanced nutrition. Stored fresh and delivered cold to your door â€” because your pet deserves better than a bag of dust.',
      'pm.hero.btn1':          'Explore meal plans',
      'pm.hero.btn2':          'Our ingredients',
      'pm.hero.chip1':         'Organic ingredients',
      'pm.hero.chip2':         'Human-grade quality',
      'pm.hero.chip3':         'Free delivery',
      'pm.hero.chip4':         'Vet-formulated',
      'pm.hero.badge_title':   'Vet-approved recipe',
      'pm.hero.badge_sub':     'Every formula reviewed by certified nutritionists',
      'pm.hero.tag_hand':      'free delivery',
      'pm.hero.tag_label':     'always included',

      'pm.manifesto.hand':     'our philosophy',
      'pm.manifesto.quote':    '"Food is medicine. We believe every bite your pet takes<br>should <em>nourish, not just fill.</em>"',
      'pm.manifesto.pill1':    'ðŸŒ¿ No fillers, ever',
      'pm.manifesto.pill2':    'ðŸ”¥ Gently cooked',
      'pm.manifesto.pill3':    'â„ï¸ Fridge-fresh only',
      'pm.manifesto.pill4':    'ðŸšš Free cold delivery',
      'pm.manifesto.pill5':    'âœ“ Vet-formulated',

      'pm.why.eyebrow':        'Why it matters',
      'pm.why.headline':       'Fresh food.<br><em>Real results.</em>',
      'pm.why.body':           'We started Spa Bites because we kept seeing healthy pets decline on processed diets. Fresh, minimally processed food isn\'t a luxury â€” it\'s how animals were meant to eat. Every batch is prepared in small quantities, never frozen, never over-processed.',
      'pm.why.img_caption':    'organic sourced Â· locally grown',
      'pm.why.p1_title':       'The problem with kibble',
      'pm.why.p1_desc':        'Ultra-processed at extreme heat, loaded with fillers, preservatives, and synthetic additives to survive years on a shelf. Not exactly what nature intended.',
      'pm.why.p2_title':       'What fresh meals provide',
      'pm.why.p2_desc':        'Bioavailable nutrients, real proteins, natural fiber, and moisture-rich ingredients that support digestion, coat health, energy, and long-term wellbeing.',
      'pm.why.p3_title':       'Our promise to you',
      'pm.why.p3_desc':        'Human-grade ingredients, batch-cooked to order, portioned precisely for your pet\'s age and weight, and delivered cold within 24 hours of preparation.',

      'pm.process.eyebrow':    'How it\'s made',
      'pm.process.headline':   'From farm to <em>food bowl</em>',
      'pm.process.hand':       'handcrafted in small batches',
      'pm.process.s1_hand':    'organic sourced',
      'pm.process.s1_title':   'Sourced organic',
      'pm.process.s1_desc':    'Ingredients sourced from certified organic farms â€” free-range proteins, seasonal vegetables, no pesticides.',
      'pm.process.s2_hand':    'made with care',
      'pm.process.s2_title':   'Handcrafted fresh',
      'pm.process.s2_desc':    'Small-batch cooked by hand in our dedicated kitchen. No factory lines. Each recipe is gently prepared to preserve nutrients.',
      'pm.process.s3_hand':    'kept cold & fresh',
      'pm.process.s3_title':   'Refrigerator stored',
      'pm.process.s3_desc':    'Portioned into sealed trays and refrigerated immediately. Never frozen, never shelf-stable. Maximum freshness, maximum nutrition.',
      'pm.process.s4_hand':    'delivered cold',
      'pm.process.s4_title':   'Delivered to door',
      'pm.process.s4_desc':    'Packed in insulated cold boxes and delivered within 24 hours of preparation. Free delivery, always, on every order.',

      'pm.kitchen.hand':       'from our kitchen, with care',
      'pm.kitchen.headline':   'Cooked in small batches.<br><em>Never mass-produced.</em>',
      'pm.kitchen.body':       'Every recipe is prepared by hand in our licensed kitchen â€” no conveyor belts, no industrial machinery. We cook the way you would at home: carefully, attentively, and with real love for what we\'re making.',
      'pm.kitchen.li1':        'Licensed & inspected commercial kitchen',
      'pm.kitchen.li2':        'Maximum batch size: 50 portions per cook',
      'pm.kitchen.li3':        'Temperature-logged at every step',
      'pm.kitchen.li4':        'Cooked to order â€” never pre-made or stockpiled',

      'pm.ing.note':           'what goes inside',
      'pm.ing.eyebrow':        'Our ingredients',
      'pm.ing.headline':       'Only the <em>good stuff</em>',
      'pm.ing.badge':          'Human-grade Â· certified organic',
      'pm.ing.showcase_hand':  'freshly made, every order',
      'pm.ing.chicken':        'Free-range Chicken',
      'pm.ing.chicken_note':   'lean protein',
      'pm.ing.salmon':         'Wild Salmon',
      'pm.ing.salmon_note':    'omega-3 rich',
      'pm.ing.beef':           'Grass-fed Beef',
      'pm.ing.beef_note':      'high iron',
      'pm.ing.potato':         'Sweet Potato',
      'pm.ing.potato_note':    'complex carbs',
      'pm.ing.broccoli':       'Broccoli',
      'pm.ing.broccoli_note':  'vitamin C+K',
      'pm.ing.berry':          'Blueberries',
      'pm.ing.berry_note':     'antioxidants',
      'pm.ing.carrot':         'Organic Carrots',
      'pm.ing.carrot_note':    'beta carotene',
      'pm.ing.rice':           'Brown Rice',
      'pm.ing.rice_note':      'digestible fiber',
      'pm.ing.eggs':           'Pasture Eggs',
      'pm.ing.eggs_note':      'complete protein',
      'pm.ing.oil':            'Olive Oil',
      'pm.ing.oil_note':       'healthy fats',
      'pm.ing.herbs':          'Parsley & Herbs',
      'pm.ing.herbs_note':     'breath + digestion',
      'pm.ing.supp':           'Vet Supplements',
      'pm.ing.supp_note':      'balanced formula',

      'pm.nut.eyebrow':        'Balanced nutrition',
      'pm.nut.headline':       'Formulated by <em>veterinary nutritionists</em>',
      'pm.nut.hand':           'science-backed, love-crafted',
      'pm.nut.n1_title':       'Complete amino acid profile',
      'pm.nut.n1_desc':        'High-quality animal proteins supply all essential amino acids for muscle maintenance, tissue repair, and immune function.',
      'pm.nut.n2_title':       'Omega-3 & omega-6 balance',
      'pm.nut.n2_desc':        'Wild salmon and flaxseed provide the right fatty acid ratio for a glossy coat, healthy joints, and reduced inflammation.',
      'pm.nut.n3_title':       'Prebiotic-rich fiber',
      'pm.nut.n3_desc':        'Vegetables and whole grains keep the gut microbiome healthy, supporting digestion, immunity, and mental clarity.',
      'pm.nut.n4_title':       'Micronutrient complete',
      'pm.nut.n4_desc':        'Fortified with a vet-grade supplement blend to meet AAFCO nutritional guidelines for all life stages.',
      'pm.nut.sticker_hand':   'made with love',
      'pm.nut.sticker_label':  'every single batch',

      'pm.quote.quote':        '"Real ingredients. Real recipes.<br><em>Real difference.</em>"',
      'pm.quote.hand':         'â€” made fresh in our kitchen, delivered to your door',

      'pm.plans.eyebrow':      'Meal plans',
      'pm.plans.headline':     'Choose your <em>perfect plan</em>',
      'pm.plans.sub':          'Tailored portions based on your pet\'s breed, age, weight, and activity level. Pause or cancel anytime.',
      'pm.plans.p1_name':      'Starter',
      'pm.plans.p1_hand':      'great for trying fresh',
      'pm.plans.p1_amount':    '$39',
      'pm.plans.p1_period':    '/ week',
      'pm.plans.p1_f1':        '7 fresh daily portions',
      'pm.plans.p1_f2':        '1 protein option (chicken or beef)',
      'pm.plans.p1_f3':        'Portion calculator included',
      'pm.plans.p1_f4':        'Free cold delivery',
      'pm.plans.p1_cta':       'Get started',
      'pm.plans.p2_popular':   'Most popular',
      'pm.plans.p2_name':      'Classic',
      'pm.plans.p2_hand':      'our most loved plan',
      'pm.plans.p2_amount':    '$69',
      'pm.plans.p2_period':    '/ week',
      'pm.plans.p2_f1':        '14 fresh daily portions',
      'pm.plans.p2_f2':        '3 rotating protein recipes',
      'pm.plans.p2_f3':        'Vet nutrition check-in',
      'pm.plans.p2_f4':        'Free cold delivery',
      'pm.plans.p2_f5':        'Pause or skip anytime',
      'pm.plans.p2_cta':       'Choose Classic',
      'pm.plans.p3_name':      'Premium',
      'pm.plans.p3_hand':      'for the very best',
      'pm.plans.p3_amount':    '$109',
      'pm.plans.p3_period':    '/ week',
      'pm.plans.p3_f1':        '21 fully custom portions',
      'pm.plans.p3_f2':        '5 recipes â€” salmon, venison & more',
      'pm.plans.p3_f3':        'Dedicated vet nutritionist',
      'pm.plans.p3_f4':        'Monthly health report',
      'pm.plans.p3_f5':        'Priority free delivery',
      'pm.plans.p3_cta':       'Go Premium',

      'pm.del.eyebrow':        'Free delivery',
      'pm.del.headline':       'Delivered cold,<br><em>every time.</em>',
      'pm.del.hand':           'delivered cold & fresh',
      'pm.del.sub':            'We use insulated cold boxes and ice packs to ensure your pet\'s meals arrive at the perfect temperature â€” no matter the weather, no matter the distance.',
      'pm.del.s1':             'Order',
      'pm.del.s2':             'We cook',
      'pm.del.s3':             'Packed cold',
      'pm.del.s4':             'Delivered',
      'pm.del.s5':             'Enjoy',
      'pm.del.cta':            'Start your first order',

      'pm.cta.eyebrow':        'Start today',
      'pm.cta.headline':       'Give your pet the food<br>they <em>truly deserve.</em>',
      'pm.cta.hand':           'â€” with love, from our kitchen to yours',
      'pm.cta.sub':            'Enter your email and we\'ll send you a free meal guide â€” including a personalised portion calculator and our best starter recipe.',
      'pm.cta.ph':             'your@email.com',
      'pm.cta.btn':            'Get free guide',
      'pm.cta.note':           'No spam, ever. Free delivery on your first order.',

      /* â”€â”€ SERVICES PAGE â€” CARDS */
      'svc_page.c1.tag':       'Veterinary',
      'svc_page.c1.name':      'Veterinary Care',
      'svc_page.c1.desc':      'Complete health examinations and personalized medical care delivered by certified veterinarians.',
      'svc_page.c1.price':     'From $65',
      'svc_page.c1.cta':       'Book now',
      'svc_page.c2.tag':       'Grooming',
      'svc_page.c2.name':      'Grooming & Spa',
      'svc_page.c2.desc':      'Premium grooming sessions using organic products and modern wellness techniques.',
      'svc_page.c2.price':     'From $45',
      'svc_page.c2.cta':       'Book now',
      'svc_page.c3.tag':       'Boarding',
      'svc_page.c3.name':      'Pet Hotel',
      'svc_page.c3.desc':      'Comfortable luxury stays with personalized attention and around-the-clock monitored care.',
      'svc_page.c3.price':     'From $80',
      'svc_page.c3.cta':       'Book now',
      'svc_page.c4.tag':       'Preventive',
      'svc_page.c4.name':      'Vaccination',
      'svc_page.c4.desc':      'Tailored vaccination schedules based on your pet\'s age, lifestyle and current health status.',
      'svc_page.c4.price':     'From $35',
      'svc_page.c4.cta':       'Book now',
      'svc_page.c5.tag':       'Wellness',
      'svc_page.c5.name':      'Wellness Plans',
      'svc_page.c5.desc':      'Preventive programs focused on long-term health, nutrition balance and activity guidance.',
      'svc_page.c5.price':     'From $55',
      'svc_page.c5.cta':       'Book now',
      'svc_page.c6.tag':       'Nutrition',
      'svc_page.c6.name':      'Nutrition Guidance',
      'svc_page.c6.desc':      'Personalized dietary plans developed by certified nutritionists for optimal pet health.',
      'svc_page.c6.price':     'From $40',
      'svc_page.c6.cta':       'Book now',
      'svc_page.w1.title':     'Certified Specialists',
      'svc_page.w1.text':      'Every team member holds recognized certifications and is dedicated to modern petcare standards.',
      'svc_page.w2.title':     '24 / 7 Support',
      'svc_page.w2.text':      'Round-the-clock care and support so your pet is always in safe, attentive hands.',
      'svc_page.w3.title':     'Calm Environment',
      'svc_page.w3.text':      'Thoughtfully designed spaces that reduce stress and create a peaceful experience for every pet.',
      'svc_page.w4.title':     'Premium Products',
      'svc_page.w4.text':      'Only carefully selected, veterinarian-approved wellness and grooming products are used.',

      /* â”€â”€ ABOUT PAGE â€” CARDS */
      'abt.story.p1':          'In 2018, a small team of veterinarians and pet wellness enthusiasts came together in a modest clinic with one goal: redefine the standard of pet care. We were tired of cold, clinical environments that stressed both pets and their families.',
      'abt.story.p2':          'We wanted something different â€” warm spaces, transparent care, human-first communication, and treatments grounded in the latest wellness science. That idea grew into Petcare Spa.',
      'abt.story.p3':          'Today we serve thousands of pets and families across the city, but the heart of what we do has never changed. Every visit should feel like coming home.',
      'abt.v1.title':          'Compassion',
      'abt.v1.text':           'Every animal that walks through our doors is treated with genuine kindness. We listen, we observe, and we adapt our care to each individual pet\'s needs.',
      'abt.v2.title':          'Trust',
      'abt.v2.text':           'We believe pet families deserve complete transparency. From diagnoses to pricing, we communicate honestly and never recommend what isn\'t needed.',
      'abt.v3.title':          'Modern Care',
      'abt.v3.text':           'We invest continuously in the latest techniques, equipment, and training. Our team stays at the frontier of veterinary and wellness science.',
      'abt.v4.title':          'Wellness-First',
      'abt.v4.text':           'Prevention matters more than treatment. Our approach prioritizes long-term health, balanced nutrition, and proactive wellness planning for every life stage.',
      'abt.t1.role':           'Lead Veterinarian',
      'abt.t1.bio':            '15 years of clinical experience with a focus on preventive medicine and internal health. Certified by the AVMA.',
      'abt.t2.role':           'Head of Grooming',
      'abt.t2.bio':            'Award-winning groomer with expertise in breed-specific care, hypoallergenic treatments, and stress-free handling.',
      'abt.t3.role':           'Wellness Coordinator',
      'abt.t3.bio':            'Specialist in pet behavior and holistic wellness planning. Designs personalized long-term health programs for every pet.',
      'abt.t4.role':           'Nutrition Specialist',
      'abt.t4.bio':            'Board-certified veterinary nutritionist with deep expertise in therapeutic diets, weight management, and metabolic health.',
      'abt.cta.headline':      'Ready to give your pet <em>the best?</em>',
      'abt.cta.sub':           'Book a visit or explore our full range of services. We\'d love to meet your pet.',
      'abt.cta.btn1':          'Book a visit',
      'abt.cta.btn2':          'Explore services',
    },

    VI: {
      /* â”€â”€ NAVIGATION */
      'nav.home':       'Trang chá»§',
      'nav.services':   'Dá»‹ch vá»¥',
      'nav.about':      'Giá»›i thiá»‡u',
      'nav.shop':       'Cá»­a hÃ ng',
      'nav.meals':      'Bá»¯a Äƒn thuáº§n khiáº¿t',
      'nav.membership': 'ThÃ nh viÃªn',
      'nav.blog':       'Blog',
      'nav.contact':    'LiÃªn há»‡',
      'nav.signin':   'ÄÄƒng nháº­p',
      'nav.book':     'Äáº·t lá»‹ch háº¹n',

      /* â”€â”€ FOOTER */
      'footer.tagline':      'Sá»©c khá»e há»¯u cÆ¡, chÄƒm sÃ³c tháº©m má»¹ vÃ  dinh dÆ°á»¡ng thá»§ cÃ´ng cho gia Ä‘Ã¬nh thÃº cÆ°ng hiá»‡n Ä‘áº¡i.',
      'footer.newsletter':   'Báº£n tin',
      'footer.email_ph':     'email@cuaban.com',
      'footer.subscribe':    'ÄÄƒng kÃ½',
      'footer.col.contact':     'LiÃªn há»‡',
      'footer.col.membership':  'ThÃ nh viÃªn',
      'footer.col.navigate':    'Äiá»u hÆ°á»›ng',
      'footer.benefit.loyalty':   'Äiá»ƒm thÆ°á»Ÿng thÃ nh viÃªn',
      'footer.benefit.meals':     'NÃ¢ng cáº¥p bá»¯a Äƒn miá»…n phÃ­',
      'footer.benefit.booking':   'Äáº·t lá»‹ch Æ°u tiÃªn',
      'footer.benefit.wellness':  'Æ¯u Ä‘Ã£i sá»©c khá»e Ä‘á»™c quyá»n',
      'footer.cta.headline':  'Mang Ä‘áº¿n cho thÃº cÆ°ng lá»‘i sá»‘ng lÃ nh máº¡nh hÆ¡n.',
      'footer.cta.btn1':      'Äáº·t lá»‹ch háº¹n',
      'footer.cta.btn2':      'KhÃ¡m phÃ¡ Spa Bites',
      'footer.trust.vet':          'ÄÆ°á»£c bÃ¡c sÄ© phÃª duyá»‡t',
      'footer.trust.organic':      'NguyÃªn liá»‡u há»¯u cÆ¡',
      'footer.trust.delivery':     'Giao hÃ ng cÃ³ báº£o láº¡nh',
      'footer.trust.handcrafted':  'Bá»¯a Äƒn thá»§ cÃ´ng',
      'footer.copyright':    'Â© 2026 Petcare Spa. Báº£n quyá»n Ä‘Ã£ Ä‘Æ°á»£c báº£o há»™.',

      /* â”€â”€ HOME â€” HERO */
      'home.hero.eyebrow':      'ChÄƒm sÃ³c sá»©c khá»e thÃº cÆ°ng cao cáº¥p',
      'home.hero.headline':     'ChÄƒm sÃ³c tháº­t sá»±<br>Ä‘áº·t <em>thÃº cÆ°ng</em> lÃªn hÃ ng Ä‘áº§u',
      'home.hero.sub':          'ChÄƒm sÃ³c thÃº y cÃ¡ nhÃ¢n hÃ³a, cháº£i lÃ´ng chuyÃªn nghiá»‡p vÃ  cÃ¡c gÃ³i sá»©c khá»e tuyá»ƒn chá»n â€” táº¥t cáº£ dÆ°á»›i má»™t mÃ¡i nhÃ . VÃ¬ thÃº cÆ°ng hiá»‡n Ä‘áº¡i xá»©ng Ä‘Ã¡ng Ä‘Æ°á»£c chÄƒm sÃ³c hiá»‡n Ä‘áº¡i.',
      'home.hero.btn1':         'Äáº·t tÆ° váº¥n',
      'home.hero.btn2':         'KhÃ¡m phÃ¡ dá»‹ch vá»¥',
      'home.hero.stat1_label':  'BÃ¡c sÄ© cÃ³ chá»©ng chá»‰',
      'home.hero.stat2_label':  'ThÃº cÆ°ng háº¡nh phÃºc',
      'home.hero.stat3_label':  'ÄÃ¡nh giÃ¡ trung bÃ¬nh',
      'home.hero.stat4_label':  'Thá»i gian pháº£n há»“i',
      'home.hero.badge_title':  'ÄÆ°á»£c bÃ¡c sÄ© thÃº y chá»©ng nháº­n',
      'home.hero.badge_sub':    'Táº¥t cáº£ dá»‹ch vá»¥ Ä‘Æ°á»£c chuyÃªn gia kiá»ƒm duyá»‡t',
      'home.hero.same_day':     'CÃ³ thá»ƒ Ä‘áº·t trong ngÃ y',

      /* â”€â”€ HOME â€” TRUST BAR */
      'trust.1': 'PhÃ¡t triá»ƒn bá»Ÿi ChuyÃªn gia Dinh dÆ°á»¡ng',
      'trust.2': 'Äáº¡t chuáº©n AAFCO',
      'trust.3': 'NguyÃªn liá»‡u cháº¥t lÆ°á»£ng cao',
      'trust.4': 'Thá»‹t cháº¥t lÆ°á»£ng USDA',

      /* â”€â”€ HOME â€” SERVICES SECTION */
      'home.svc.eyebrow':    'ChÃºng tÃ´i cung cáº¥p',
      'home.svc.headline':   'Má»i dá»‹ch vá»¥ thÃº cÆ°ng<br>cá»§a báº¡n sáº½ <em>yÃªu thÃ­ch</em>',
      'home.svc.aside':      'ChÄƒm sÃ³c toÃ n diá»‡n vá»›i Ä‘á»™ chÃ­nh xÃ¡c lÃ¢m sÃ ng vÃ  sá»± áº¥m Ã¡p chÃ¢n tháº­t.',
      'svc.vet.name':        'Dá»‹ch vá»¥ ThÃº y',
      'svc.vet.desc':        'KhÃ¡m vÃ  Ä‘iá»u trá»‹ toÃ n diá»‡n bá»Ÿi bÃ¡c sÄ© thÃº y cÃ³ chá»©ng chá»‰, táº­n tÃ¢m vá»›i sá»©c khá»e lÃ¢u dÃ i cá»§a thÃº cÆ°ng báº¡n.',
      'svc.vet.cta':         'Äáº·t lá»‹ch ngay',
      'svc.grooming.name':   'Cháº£i lÃ´ng & Spa',
      'svc.grooming.desc':   'Dá»‹ch vá»¥ cháº£i lÃ´ng toÃ n diá»‡n vá»›i sáº£n pháº©m cao cáº¥p â€” táº¯m, táº¡o kiá»ƒu, cáº¯t mÃ³ng vÃ  dÆ°á»¡ng lÃ´ng sÃ¢u phÃ¹ há»£p má»i loáº¡i lÃ´ng.',
      'svc.grooming.cta':    'Äáº·t lá»‹ch ngay',
      'svc.vacc.name':       'TiÃªm phÃ²ng',
      'svc.vacc.desc':       'Lá»‹ch tiÃªm phÃ²ng chuáº©n hÃ³a do bÃ¡c sÄ© thÃº y thiáº¿t káº¿, báº£o vá»‡ thÃº cÆ°ng á»Ÿ má»i giai Ä‘oáº¡n vá»›i há»“ sÆ¡ sá»©c khá»e sá»‘.',
      'svc.vacc.cta':        'Äáº·t lá»‹ch ngay',
      'svc.surgery.name':    'Pháº«u thuáº­t thÃº cÆ°ng',
      'svc.surgery.desc':    'CÃ¡c ca pháº«u thuáº­t Ä‘Æ°á»£c thá»±c hiá»‡n táº¡i cÆ¡ sá»Ÿ vÃ´ trÃ¹ng hiá»‡n Ä‘áº¡i vá»›i giÃ¡m sÃ¡t gÃ¢y mÃª toÃ n diá»‡n vÃ  há»— trá»£ sau má»•.',
      'svc.surgery.cta':     'TÃ¬m hiá»ƒu thÃªm',
      'svc.plans.name':      'GÃ³i Sá»©c khá»e',
      'svc.plans.desc':      'GÃ³i thÃ nh viÃªn hÃ ng nÄƒm bao gá»“m chÄƒm sÃ³c phÃ²ng ngá»«a, Æ°u Ä‘Ã£i, Æ°u tiÃªn Ä‘áº·t lá»‹ch vÃ  kiá»ƒm tra sá»©c khá»e hÃ ng quÃ½.',
      'svc.plans.cta':       'Xem cÃ¡c gÃ³i',
      'svc.nutrition.name':  'TÆ° váº¥n Dinh dÆ°á»¡ng',
      'svc.nutrition.desc':  'Láº­p káº¿ hoáº¡ch dinh dÆ°á»¡ng cÃ¡ nhÃ¢n hÃ³a bá»Ÿi chuyÃªn gia â€” tá»« nhu cáº§u theo giá»‘ng Ä‘áº¿n cháº¿ Ä‘á»™ Äƒn phá»¥c há»“i sau pháº«u thuáº­t.',
      'svc.nutrition.cta':   'TÃ¬m hiá»ƒu thÃªm',

      /* â”€â”€ HOME â€” PHILOSOPHY */
      'home.phil.eyebrow':   'Triáº¿t lÃ½ cá»§a chÃºng tÃ´i',
      'home.phil.headline':  'Sá»©c khá»e lÃ  má»™t hÃ nh trÃ¬nh,<br>khÃ´ng pháº£i <em>sá»± kiá»‡n</em>',
      'home.phil.body':      'ChÃºng tÃ´i tin ráº±ng sá»©c khá»e thÃº cÆ°ng Ä‘Æ°á»£c xÃ¢y dá»±ng trong nhá»¯ng khoáº£nh kháº¯c nhá» nháº·t, nháº¥t quÃ¡n â€” thá»©c Äƒn phÃ¹ há»£p, kiá»ƒm tra Ä‘Ãºng lÃºc, mÃ´i trÆ°á»ng Ä‘Ãºng Ä‘áº¯n. Äá»™i ngÅ© cá»§a chÃºng tÃ´i theo triáº¿t lÃ½ phÃ²ng bá»‡nh lÃ  trÃªn háº¿t, coi thÃº cÆ°ng nhÆ° nhá»¯ng cÃ¡ thá»ƒ riÃªng biá»‡t.',
      'home.phil.p1_title':  'PhÃ²ng bá»‡nh lÃ  Æ°u tiÃªn',
      'home.phil.p1_text':   'Kiá»ƒm tra sá»©c khá»e Ä‘á»‹nh ká»³ giÃºp phÃ¡t hiá»‡n váº¥n Ä‘á» sá»›m, trÆ°á»›c khi trá»Ÿ nÃªn tá»‘n kÃ©m hoáº·c Ä‘au Ä‘á»›n.',
      'home.phil.p2_title':  'Tháº¥u cáº£m cáº£m xÃºc',
      'home.phil.p2_text':   'ChÃºng tÃ´i hiá»ƒu ráº±ng thÃº cÆ°ng cÄƒng tháº³ng sáº½ khÃ³ há»“i phá»¥c. Má»—i láº§n thÄƒm khÃ¡m Ä‘á»u Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘á»ƒ mang láº¡i sá»± bÃ¬nh yÃªn.',
      'home.phil.p3_title':  'Káº¿ hoáº¡ch cÃ¡ nhÃ¢n hÃ³a',
      'home.phil.p3_text':   'KhÃ´ng cÃ³ hai thÃº cÆ°ng nÃ o giá»‘ng nhau. ChÃºng tÃ´i xÃ¢y dá»±ng káº¿ hoáº¡ch chÄƒm sÃ³c riÃªng dá»±a trÃªn giá»‘ng, tuá»•i vÃ  lá»‘i sá»‘ng.',
      'home.phil.cta':       'CÃ¡ch tiáº¿p cáº­n cá»§a chÃºng tÃ´i',

      /* â”€â”€ HOME â€” PRODUCTS */
      'home.prod.eyebrow':   'Sáº£n pháº©m tuyá»ƒn chá»n',
      'home.prod.headline':  'Nhá»¯ng thiáº¿t yáº¿u, Ä‘Æ°á»£c nÃ¢ng táº§m',
      'home.prod.sub':       'Thá»±c pháº©m bá»• sung Ä‘Æ°á»£c bÃ¡c sÄ© thÃº y khuyÃªn dÃ¹ng, bá»™ chÄƒm sÃ³c sá»©c khá»e vÃ  sáº£n pháº©m chÄƒm sÃ³c hÃ ng ngÃ y.',
      'prod.tag1':           'Thá»±c pháº©m bá»• sung',
      'prod.tag2':           'ChÄƒm sÃ³c lÃ´ng',
      'prod.tag3':           'Dinh dÆ°á»¡ng',
      'prod.tag4':           'Thiáº¿t yáº¿u',
      'home.prod.cta':       'Xem táº¥t cáº£ sáº£n pháº©m',

      /* â”€â”€ HOME â€” HOW IT WORKS */
      'home.how.eyebrow':      'Báº¯t Ä‘áº§u',
      'home.how.headline':     'ChÄƒm sÃ³c Ä‘Æ¡n giáº£n hÃ³a',
      'home.how.sub':          'Tá»« láº§n Ä‘áº§u ghÃ© thÄƒm Ä‘áº¿n chÄƒm sÃ³c lÃ¢u dÃ i â€” má»i bÆ°á»›c Ä‘á»u Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘á»ƒ dá»… dÃ ng.',
      'home.how.step1_title':  'Äáº·t tÆ° váº¥n',
      'home.how.step1_desc':   'Chá»n dá»‹ch vá»¥ vÃ  thá»i gian phÃ¹ há»£p. CÃ³ thá»ƒ Ä‘áº·t trong ngÃ y. ChuyÃªn gia xÃ¡c nháº­n trong vÃ²ng má»™t giá».',
      'home.how.step1_tag':    'Chá»‰ 2 phÃºt',
      'home.how.step2_title':  'Káº¿ hoáº¡ch cÃ¡ nhÃ¢n cá»§a báº¡n',
      'home.how.step2_desc':   'Sau láº§n thÄƒm khÃ¡m Ä‘áº§u tiÃªn, Ä‘á»™i ngÅ© bÃ¡c sÄ© xÃ¢y dá»±ng lá»™ trÃ¬nh sá»©c khá»e phÃ¹ há»£p â€” dinh dÆ°á»¡ng, lá»‹ch kiá»ƒm tra vÃ  Æ°u tiÃªn chÄƒm sÃ³c.',
      'home.how.step2_tag':    'HoÃ n toÃ n cÃ¡ nhÃ¢n hÃ³a',
      'home.how.step3_title':  'Há»— trá»£ sá»©c khá»e liÃªn tá»¥c',
      'home.how.step3_desc':   'Theo dÃµi sá»©c khá»e thÃº cÆ°ng theo thá»i gian, nháº­n nháº¯c nhá»Ÿ vÃ  liÃªn há»‡ Ä‘á»™i ngÅ© bÃ¡c sÄ© báº¥t cá»© lÃºc nÃ o qua á»©ng dá»¥ng.',
      'home.how.step3_tag':    'LuÃ´n Ä‘á»“ng hÃ nh',

      /* â”€â”€ HOME â€” TESTIMONIALS */
      'home.test.eyebrow':   'Chia sáº» tá»« gia Ä‘Ã¬nh thÃº cÆ°ng',
      'home.test.headline':  'ÄÆ°á»£c tin tÆ°á»Ÿng bá»Ÿi hÃ ng nghÃ¬n ngÆ°á»i',
      'home.test.sub':       'Nhá»¯ng cÃ¢u chuyá»‡n tháº­t tá»« cÃ¡c gia Ä‘Ã¬nh thÃº cÆ°ng kháº¯p thÃ nh phá»‘.',

      /* â”€â”€ HOME â€” FAQ */
      'home.faq.support_label': 'Há»— trá»£ 24/7',
      'home.faq.eyebrow':       'Giáº£i Ä‘Ã¡p tháº¯c máº¯c',
      'home.faq.headline':      'CÃ¢u há»i thÆ°á»ng gáº·p,<br>Ä‘Æ°á»£c giáº£i Ä‘Ã¡p táº­n tÃ¢m',
      'home.faq.body':          'ChÃºng tÃ´i tin ráº±ng chÄƒm sÃ³c thÃº cÆ°ng tá»‘t báº¯t Ä‘áº§u tá»« sá»± rÃµ rÃ ng, minh báº¡ch vÃ  giao tiáº¿p nháº¹ nhÃ ng. ÄÃ¢y lÃ  nhá»¯ng cÃ¢u há»i Ä‘Æ°á»£c Ä‘áº·t ra thÆ°á»ng xuyÃªn nháº¥t.',
      'home.faq.cta_label':     'Cáº§n há»— trá»£ ngay?',
      'home.faq.cta':           'LiÃªn há»‡ há»— trá»£',
      'home.faq.q1':            'TÃ´i cÃ³ thá»ƒ mong Ä‘á»£i gÃ¬ trong láº§n Ä‘áº§u tiÃªn Ä‘Æ°a thÃº cÆ°ng Ä‘áº¿n?',
      'home.faq.a1':            'Láº§n khÃ¡m Ä‘áº§u tiÃªn bao gá»“m Ä‘Ã¡nh giÃ¡ sá»©c khá»e toÃ n diá»‡n, quan sÃ¡t hÃ nh vi, tÆ° váº¥n sá»©c khá»e vÃ  cÃ¡c khuyáº¿n nghá»‹ cÃ¡ nhÃ¢n hÃ³a phÃ¹ há»£p vá»›i Ä‘á»™ tuá»•i vÃ  lá»‘i sá»‘ng cá»§a thÃº cÆ°ng.',
      'home.faq.q2':            'Quy trÃ¬nh cháº£i lÃ´ng cá»§a báº¡n giáº£m cÄƒng tháº³ng cho thÃº cÆ°ng nhÆ° tháº¿ nÃ o?',
      'home.faq.a2':            'ChÃºng tÃ´i sá»­ dá»¥ng dá»¥ng cá»¥ Ã­t á»“n, ká»¹ thuáº­t xá»­ lÃ½ nháº¹ nhÃ ng vÃ  nghá»‰ giáº£i lao theo lá»‹ch Ä‘á»ƒ Ä‘áº£m báº£o nhá»¯ng thÃº cÆ°ng lo láº¯ng luÃ´n thoáº£i mÃ¡i trong suá»‘t quÃ¡ trÃ¬nh cháº£i lÃ´ng.',
      'home.faq.q3':            'Báº¡n cÃ³ cung cáº¥p gÃ³i sá»©c khá»e cÃ¡ nhÃ¢n hÃ³a khÃ´ng?',
      'home.faq.a3':            'CÃ³. Má»—i gÃ³i sá»©c khá»e Ä‘Æ°á»£c tÃ¹y chá»‰nh dá»±a trÃªn giá»‘ng, má»©c Ä‘á»™ hoáº¡t Ä‘á»™ng, tuá»•i, dinh dÆ°á»¡ng vÃ  tiá»n sá»­ bá»‡nh lÃ½.',
      'home.faq.q4':            'TÃ´i cÃ³ thá»ƒ nháº­n cáº­p nháº­t trong suá»‘t buá»•i háº¹n khÃ´ng?',
      'home.faq.a4':            'HoÃ n toÃ n cÃ³ thá»ƒ. Äá»™i ngÅ© cá»§a chÃºng tÃ´i cung cáº¥p cáº­p nháº­t, hÃ¬nh áº£nh vÃ  ghi chÃº chÄƒm sÃ³c trong suá»‘t cÃ¡c buá»•i cháº£i lÃ´ng hoáº·c Ä‘iá»u trá»‹ dÃ i hÆ¡n.',

      /* â”€â”€ HOME â€” CTA BAND */
      'home.cta.eyebrow':    'Sáºµn sÃ ng báº¯t Ä‘áº§u?',
      'home.cta.headline':   'Cuá»™c sá»‘ng tá»‘t nháº¥t<br>cá»§a thÃº cÆ°ng báº¯t Ä‘áº§u <em>hÃ´m nay</em>',
      'home.cta.sub':        'Tham gia cÃ¹ng hÆ¡n 12.000 gia Ä‘Ã¬nh thÃº cÆ°ng tin tÆ°á»Ÿng Petcare Spa cho tá»«ng giai Ä‘oáº¡n trong hÃ nh trÃ¬nh sá»©c khá»e cá»§a thÃº cÆ°ng.',
      'home.cta.btn1':       'Äáº·t tÆ° váº¥n',
      'home.cta.btn2':       'Xem gÃ³i sá»©c khá»e',

      /* â”€â”€ PROMO POPUP */
      'promo.label':         'âœ¦ Æ¯u Ä‘Ã£i Ä‘áº·c biá»‡t',
      'promo.headline':      'Giáº£m 20% cho buá»•i<br>cháº£i lÃ´ng <em>Ä‘áº§u tiÃªn</em>',
      'promo.body':          'Tham gia cá»™ng Ä‘á»“ng Petcare Spa Ä‘á»ƒ nháº­n Æ°u Ä‘Ã£i Ä‘á»™c quyá»n vÃ  thÃ´ng tin sá»©c khá»e cÃ¡ nhÃ¢n hÃ³a. Chá»‰ dÃ nh cho khÃ¡ch hÃ ng má»›i.',
      'promo.cta':           'Nháº­n ngay Æ°u Ä‘Ã£i 20%',
      'promo.skip':          'Äá»ƒ sau',
      'promo.disable':       'KhÃ´ng hiá»ƒn thá»‹ ná»¯a',
      'promo.media_pill':    'ChÃ o má»«ng Â· 2026',

      /* â”€â”€ SERVICES PAGE */
      'svc_page.hero.accent':   'chÄƒm chÃºt tá»«ng chi tiáº¿t',
      'svc_page.hero.eyebrow':  'ChÄƒm sÃ³c ThÃº cÆ°ng Cao cáº¥p',
      'svc_page.hero.headline': 'ChÄƒm sÃ³c toÃ n diá»‡n<br><em>cho thÃº cÆ°ng hiá»‡n Ä‘áº¡i.</em>',
      'svc_page.hero.body':     'Dinh dÆ°á»¡ng há»¯u cÆ¡, cháº£i lÃ´ng vÃ  dá»‹ch vá»¥ chÄƒm sÃ³c sá»©c khá»e Ä‘Æ°á»£c thiáº¿t káº¿ xung quanh sá»± thoáº£i mÃ¡i, tin tÆ°á»Ÿng vÃ  sá»©c khá»e lÃ¢u dÃ i.',
      'svc_page.hero.btn1':     'Äáº·t lá»‹ch háº¹n',
      'svc_page.hero.btn2':     'KhÃ¡m phÃ¡ bá»¯a Äƒn',
      'svc_page.hero.trust1':   'ÄÆ°á»£c kiá»ƒm duyá»‡t bá»Ÿi ThÃº y sÄ©',
      'svc_page.hero.trust2':   'NguyÃªn liá»‡u há»¯u cÆ¡',
      'svc_page.hero.trust3':   'Bá»¯a Äƒn tÆ°Æ¡i láº¡nh',
      'svc_page.stats.s1':      'KhÃ¡ch hÃ ng hÃ i lÃ²ng',
      'svc_page.stats.s2':      'ÄÃ¡nh giÃ¡ Google',
      'svc_page.stats.s3':      'NÄƒm kinh nghiá»‡m',
      'svc_page.stats.s4':      'Há»— trá»£ cÃ³ sáºµn',
      'svc_page.grid.eyebrow':  'ChÃºng tÃ´i cung cáº¥p',
      'svc_page.grid.headline': 'Má»i thá»© thÃº cÆ°ng cáº§n',
      'svc_page.grid.sub':      'SÃ¡u dá»‹ch vá»¥ chuyÃªn biá»‡t Ä‘Æ°á»£c cung cáº¥p bá»Ÿi chuyÃªn gia trong mÃ´i trÆ°á»ng hiá»‡n Ä‘áº¡i vÃ  bÃ¬nh yÃªn.',
      'svc_page.why.eyebrow':   'Táº¡i sao chá»n chÃºng tÃ´i',
      'svc_page.why.headline':  'ÄÆ°á»£c thiáº¿t káº¿ xung quanh sá»± thoáº£i mÃ¡i vÃ  tin tÆ°á»Ÿng',

      /* â”€â”€ WELLNESS PAGE */
      'wlns.hero.eyebrow':   'ChÆ°Æ¡ng trÃ¬nh Sá»©c khá»e',
      'wlns.hero.headline':  'ChÄƒm sÃ³c phÃ²ng ngá»«a <em>thay Ä‘á»•i táº¥t cáº£.</em>',
      'wlns.hero.body':      'GÃ³i sá»©c khá»e khÃ´ng chá»‰ lÃ  sáº£n pháº©m â€” Ä‘Ã³ lÃ  cam káº¿t vá»›i sá»©c khá»e lÃ¢u dÃ i cá»§a thÃº cÆ°ng báº¡n. ÄÆ°á»£c xÃ¢y dá»±ng xung quanh nhu cáº§u cÃ¡ nhÃ¢n, má»—i gÃ³i bao gá»“m kiá»ƒm tra chuyÃªn gia, tÆ° váº¥n dinh dÆ°á»¡ng vÃ  há»— trá»£ khÃ´ng giá»›i háº¡n.',
      'wlns.hero.btn1':      'Xem cÃ¡c gÃ³i',
      'wlns.hero.btn2':      'NÃ³i chuyá»‡n vá»›i chuyÃªn gia',
      'wlns.hero.badge':     'GÃ³i do bÃ¡c sÄ© thiáº¿t káº¿',
      'wlns.trust.s1':       'ThÃº cÆ°ng Ä‘Ã£ Ä‘Äƒng kÃ½',
      'wlns.trust.s2':       'ÄÃ¡nh giÃ¡ thÃ nh viÃªn',
      'wlns.trust.s3':       'Báº¥t cá»© lÃºc nÃ o',
      'wlns.intro.eyebrow':  'Triáº¿t lÃ½ cá»§a chÃºng tÃ´i',
      'wlns.intro.headline': 'Sá»©c khá»e lÃ  hÃ nh trÃ¬nh, <em>khÃ´ng pháº£i chuyáº¿n thÄƒm duy nháº¥t.</em>',
      'wlns.plans.eyebrow':  'GÃ³i thÃ nh viÃªn',
      'wlns.plans.headline': 'Chá»n gÃ³i phÃ¹ há»£p cho thÃº cÆ°ng',
      'wlns.plans.sub':      'Má»—i gÃ³i bao gá»“m chuyÃªn gia sá»©c khá»e riÃªng, giÃ¡ minh báº¡ch vÃ  Ä‘Äƒng kÃ½ linh hoáº¡t theo thÃ¡ng.',

      /* â”€â”€ SHOP PAGE */
      'shop.hero.eyebrow':   'Sáº£n pháº©m ThÃº cÆ°ng Cao cáº¥p',
      'shop.hero.headline':  'Thiáº¿t yáº¿u Ä‘Æ°á»£c tuyá»ƒn chá»n cho thÃº cÆ°ng khá»e máº¡nh vÃ  háº¡nh phÃºc hÆ¡n.',
      'shop.hero.sub':       'KhÃ¡m phÃ¡ dinh dÆ°á»¡ng cao cáº¥p, sáº£n pháº©m sá»©c khá»e, dá»¥ng cá»¥ cháº£i lÃ´ng vÃ  phá»¥ kiá»‡n hiá»‡n Ä‘áº¡i Ä‘Æ°á»£c chuyÃªn gia thÃº y lá»±a chá»n cáº©n tháº­n.',
      'shop.hero.btn1':      'Mua ngay',
      'shop.hero.btn2':      'Duyá»‡t danh má»¥c',

      /* â”€â”€ BLOG PAGE */
      'blog.hero.eyebrow':   'Táº¡p chÃ­ Petcare Spa',
      'blog.hero.headline':  'CÃ¢u chuyá»‡n sá»©c khá»e,<br><em>chuyÃªn gia chia sáº».</em>',
      'blog.cats.all':       'Táº¥t cáº£',
      'blog.cats.wellness':  'Sá»©c khá»e',
      'blog.cats.nutrition': 'Dinh dÆ°á»¡ng',
      'blog.cats.grooming':  'ChÄƒm sÃ³c lÃ´ng',
      'blog.cats.insights':  'Kiáº¿n thá»©c thÃº cÆ°ng',
      'blog.cats.lifestyle': 'Lá»‘i sá»‘ng',
      'blog.latest.eyebrow': 'BÃ i viáº¿t má»›i nháº¥t',
      'blog.latest.headline':'Má»›i tá»« táº¡p chÃ­',

      /* â”€â”€ ABOUT PAGE */
      'abt.hero.eyebrow':    'CÃ¢u chuyá»‡n cá»§a chÃºng tÃ´i',
      'abt.hero.headline':   'ÄÆ°á»£c xÃ¢y dá»±ng tá»« tÃ¬nh yÃªu vá»›i <em>má»i loÃ i váº­t.</em>',
      'abt.story.eyebrow':   'Khá»Ÿi Ä‘áº§u nhÆ° tháº¿ nÃ o',
      'abt.story.headline':  'PhÃ²ng khÃ¡m Ä‘Æ°á»£c sinh ra tá»« <em>niá»m Ä‘am mÃª thá»±c sá»±.</em>',
      'abt.values.eyebrow':  'Äiá»u hÆ°á»›ng dáº«n chÃºng tÃ´i',
      'abt.values.headline': 'Nhá»¯ng giÃ¡ trá»‹ chÃºng tÃ´i xÃ¢y dá»±ng má»—i ngÃ y',
      'abt.team.eyebrow':    'Nhá»¯ng ngÆ°á»i Ä‘áº±ng sau',
      'abt.team.headline':   'Gáº·p gá»¡ cÃ¡c chuyÃªn gia cá»§a chÃºng tÃ´i',
      'abt.team.sub':        'Äá»™i ngÅ© chuyÃªn gia Ä‘Æ°á»£c chá»©ng nháº­n, chia sáº» niá»m Ä‘am mÃª sÃ¢u sáº¯c vá»›i phÃºc lá»£i Ä‘á»™ng váº­t vÃ  chÄƒm sÃ³c thÃº cÆ°ng hiá»‡n Ä‘áº¡i.',
      'abt.metrics.s1':      'ThÃº cÆ°ng Ä‘Æ°á»£c chÄƒm sÃ³c',
      'abt.metrics.s2':      'NÄƒm phá»¥c vá»¥ táº­n tÃ¢m',
      'abt.metrics.s3':      'NhÃ¢n viÃªn cÃ³ chá»©ng chá»‰',
      'abt.metrics.s4':      'ÄÃ¡nh giÃ¡ trung bÃ¬nh',

      /* â”€â”€ CONTACT PAGE */
      'cnt.hero.eyebrow':        'LiÃªn há»‡',
      'cnt.hero.headline':       'ChÃºng tÃ´i luÃ´n á»Ÿ Ä‘Ã¢y cho báº¡n <em>vÃ  thÃº cÆ°ng.</em>',
      'cnt.hero.body':           'DÃ¹ báº¡n cÃ³ cÃ¢u há»i, muá»‘n Ä‘áº·t lá»‹ch háº¹n, hay chá»‰ muá»‘n chÃ o há»i â€” Ä‘á»™i ngÅ© cá»§a chÃºng tÃ´i luÃ´n sáºµn sÃ ng giÃºp Ä‘á»¡.',
      'cnt.form.name_label':     'Há» vÃ  tÃªn',
      'cnt.form.name_ph':        'Há» vÃ  tÃªn cá»§a báº¡n',
      'cnt.form.email_label':    'Äá»‹a chá»‰ email',
      'cnt.form.phone_label':    'Sá»‘ Ä‘iá»‡n thoáº¡i',
      'cnt.form.pet_label':      'Loáº¡i thÃº cÆ°ng',
      'cnt.form.pet_ph':         'Chá»n loáº¡i thÃº cÆ°ng',
      'cnt.form.subject_label':  'TiÃªu Ä‘á»',
      'cnt.form.subject_ph':     'ChÃºng tÃ´i cÃ³ thá»ƒ giÃºp gÃ¬?',
      'cnt.form.msg_label':      'Tin nháº¯n',
      'cnt.form.msg_ph':         'Ká»ƒ cho chÃºng tÃ´i nghe vá» thÃº cÆ°ng vÃ  nhu cáº§u cá»§a báº¡n...',
      'cnt.form.submit':         'Gá»­i tin nháº¯n',
      'cnt.form.note':           'ChÃºng tÃ´i sáº½ pháº£n há»“i trong vÃ²ng 4 giá» lÃ m viá»‡c.',
      'cnt.hours.eyebrow':       'Giá» lÃ m viá»‡c',
      'cnt.hours.headline':      'GhÃ© thÄƒm chÃºng tÃ´i <em>báº¥t cá»© lÃºc nÃ o.</em>',

      /* â”€â”€ BOOKING PAGE */
      'bk.help':    'Cáº§n trá»£ giÃºp?',
      'bk.back':    'Quay láº¡i trang web',
      'bk.step1':   'Dá»‹ch vá»¥',
      'bk.step2':   'ThÃº cÆ°ng',
      'bk.step3':   'NgÃ y & Giá»',
      'bk.step4':   'Chi tiáº¿t',
      'bk.step5':   'XÃ¡c nháº­n',

      /* â”€â”€ POLICY PAGE */
      'plc.hero.eyebrow':    'ChÃ­nh sÃ¡ch & Äiá»u khoáº£n',
      'plc.hero.headline':   'ChÃ­nh sÃ¡ch cá»§a chÃºng tÃ´i,<br><em>giáº£i thÃ­ch rÃµ rÃ ng.</em>',

      /* â”€â”€ Spa Bites PAGE */
      'pm.hero.eyebrow':       'Bá»¯a Äƒn thuáº§n khiáº¿t',
      'pm.hero.prehand':       'â€” chuáº©n bá»‹ tÆ°Æ¡i ngon, tá»«ng máº»',
      'pm.hero.headline':      'Thá»©c Äƒn tháº­t,<br>lÃ m vá»›i <em>tÃ¬nh yÃªu.</em>',
      'pm.hero.sub':           'Thá»§ cÃ´ng tá»« nguyÃªn liá»‡u há»¯u cÆ¡, cháº¥t lÆ°á»£ng thá»±c pháº©m ngÆ°á»i. ÄÆ°á»£c bÃ¡c sÄ© thÃº y cÃ´ng thá»©c hÃ³a cho dinh dÆ°á»¡ng cÃ¢n báº±ng. Báº£o quáº£n tÆ°Æ¡i vÃ  giao láº¡nh Ä‘áº¿n cá»­a báº¡n â€” vÃ¬ thÃº cÆ°ng cá»§a báº¡n xá»©ng Ä‘Ã¡ng hÆ¡n má»™t tÃºi bá»™t.',
      'pm.hero.btn1':          'KhÃ¡m phÃ¡ gÃ³i bá»¯a Äƒn',
      'pm.hero.btn2':          'NguyÃªn liá»‡u cá»§a chÃºng tÃ´i',
      'pm.hero.chip1':         'NguyÃªn liá»‡u há»¯u cÆ¡',
      'pm.hero.chip2':         'Cháº¥t lÆ°á»£ng thá»±c pháº©m ngÆ°á»i',
      'pm.hero.chip3':         'Giao hÃ ng miá»…n phÃ­',
      'pm.hero.chip4':         'ÄÆ°á»£c bÃ¡c sÄ© cÃ´ng thá»©c',
      'pm.hero.badge_title':   'ÄÆ°á»£c bÃ¡c sÄ© thÃº y phÃª duyá»‡t',
      'pm.hero.badge_sub':     'Má»i cÃ´ng thá»©c Ä‘Æ°á»£c chuyÃªn gia dinh dÆ°á»¡ng kiá»ƒm duyá»‡t',
      'pm.hero.tag_hand':      'giao hÃ ng miá»…n phÃ­',
      'pm.hero.tag_label':     'luÃ´n bao gá»“m',

      'pm.manifesto.hand':     'triáº¿t lÃ½ cá»§a chÃºng tÃ´i',
      'pm.manifesto.quote':    '"Thá»©c Äƒn lÃ  thuá»‘c. ChÃºng tÃ´i tin ráº±ng má»—i miáº¿ng thÃº cÆ°ng Äƒn<br>pháº£i <em>nuÃ´i dÆ°á»¡ng, khÃ´ng chá»‰ láº¥p Ä‘áº§y.</em>"',
      'pm.manifesto.pill1':    'ðŸŒ¿ KhÃ´ng cháº¥t Ä‘á»™n, mÃ£i mÃ£i',
      'pm.manifesto.pill2':    'ðŸ”¥ Náº¥u chÃ­n nháº¹ nhÃ ng',
      'pm.manifesto.pill3':    'â„ï¸ Chá»‰ tÆ°Æ¡i trong tá»§ láº¡nh',
      'pm.manifesto.pill4':    'ðŸšš Giao láº¡nh miá»…n phÃ­',
      'pm.manifesto.pill5':    'âœ“ ÄÆ°á»£c bÃ¡c sÄ© cÃ´ng thá»©c',

      'pm.why.eyebrow':        'Táº¡i sao Ä‘iá»u nÃ y quan trá»ng',
      'pm.why.headline':       'Thá»©c Äƒn tÆ°Æ¡i.<br><em>Káº¿t quáº£ thá»±c.</em>',
      'pm.why.body':           'ChÃºng tÃ´i báº¯t Ä‘áº§u Spa Bites vÃ¬ cá»© tháº¥y nhá»¯ng thÃº cÆ°ng khá»e máº¡nh suy giáº£m vÃ¬ cháº¿ Ä‘á»™ Äƒn qua cháº¿ biáº¿n. Thá»©c Äƒn tÆ°Æ¡i, Ã­t qua cháº¿ biáº¿n khÃ´ng pháº£i lÃ  xa xá»‰ â€” Ä‘Ã³ lÃ  cÃ¡ch Ä‘á»™ng váº­t Ä‘Æ°á»£c táº¡o ra Ä‘á»ƒ Äƒn. Má»—i máº» Ä‘Æ°á»£c chuáº©n bá»‹ vá»›i sá»‘ lÆ°á»£ng nhá», khÃ´ng bao giá» Ä‘Ã´ng láº¡nh, khÃ´ng bao giá» qua cháº¿ biáº¿n quÃ¡ má»©c.',
      'pm.why.img_caption':    'nguá»“n há»¯u cÆ¡ Â· trá»“ng Ä‘á»‹a phÆ°Æ¡ng',
      'pm.why.p1_title':       'Váº¥n Ä‘á» vá»›i thá»©c Äƒn khÃ´',
      'pm.why.p1_desc':        'ÄÆ°á»£c xá»­ lÃ½ siÃªu á»Ÿ nhiá»‡t Ä‘á»™ cá»±c cao, Ä‘áº§y cháº¥t Ä‘á»™n, cháº¥t báº£o quáº£n vÃ  phá»¥ gia tá»•ng há»£p Ä‘á»ƒ tá»“n táº¡i nhiá»u nÄƒm trÃªn ká»‡. KhÃ´ng háº³n lÃ  Ä‘iá»u thiÃªn nhiÃªn muá»‘n.',
      'pm.why.p2_title':       'Nhá»¯ng gÃ¬ bá»¯a Äƒn tÆ°Æ¡i cung cáº¥p',
      'pm.why.p2_desc':        'Cháº¥t dinh dÆ°á»¡ng sinh há»c cÃ³ sáºµn, protein tháº­t, cháº¥t xÆ¡ tá»± nhiÃªn vÃ  nguyÃªn liá»‡u giÃ u Ä‘á»™ áº©m há»— trá»£ tiÃªu hÃ³a, sá»©c khá»e lÃ´ng, nÄƒng lÆ°á»£ng vÃ  sá»©c khá»e lÃ¢u dÃ i.',
      'pm.why.p3_title':       'Cam káº¿t cá»§a chÃºng tÃ´i vá»›i báº¡n',
      'pm.why.p3_desc':        'NguyÃªn liá»‡u cháº¥t lÆ°á»£ng ngÆ°á»i, náº¥u theo Ä‘Æ¡n hÃ ng, chia kháº©u pháº§n chÃ­nh xÃ¡c cho Ä‘á»™ tuá»•i vÃ  cÃ¢n náº·ng cá»§a thÃº cÆ°ng, giao láº¡nh trong vÃ²ng 24 giá» sau khi chuáº©n bá»‹.',

      'pm.process.eyebrow':    'ÄÆ°á»£c lÃ m nhÆ° tháº¿ nÃ o',
      'pm.process.headline':   'Tá»« trang tráº¡i Ä‘áº¿n <em>bÃ¡t Äƒn</em>',
      'pm.process.hand':       'thá»§ cÃ´ng trong máº» nhá»',
      'pm.process.s1_hand':    'nguá»“n há»¯u cÆ¡',
      'pm.process.s1_title':   'Nguá»“n há»¯u cÆ¡',
      'pm.process.s1_desc':    'NguyÃªn liá»‡u tá»« cÃ¡c trang tráº¡i há»¯u cÆ¡ Ä‘Æ°á»£c chá»©ng nháº­n â€” protein tháº£ rá»«ng, rau quáº£ theo mÃ¹a, khÃ´ng thuá»‘c trá»« sÃ¢u.',
      'pm.process.s2_hand':    'lÃ m vá»›i sá»± chÄƒm sÃ³c',
      'pm.process.s2_title':   'Thá»§ cÃ´ng tÆ°Æ¡i ngon',
      'pm.process.s2_desc':    'Náº¥u tá»«ng máº» nhá» báº±ng tay trong báº¿p chuyÃªn dá»¥ng. KhÃ´ng dÃ¢y chuyá»n cÃ´ng xÆ°á»Ÿng. Má»—i cÃ´ng thá»©c Ä‘Æ°á»£c chuáº©n bá»‹ nháº¹ nhÃ ng Ä‘á»ƒ giá»¯ nguyÃªn cháº¥t dinh dÆ°á»¡ng.',
      'pm.process.s3_hand':    'giá»¯ láº¡nh & tÆ°Æ¡i',
      'pm.process.s3_title':   'Báº£o quáº£n trong tá»§ láº¡nh',
      'pm.process.s3_desc':    'Chia vÃ o khay kÃ­n vÃ  lÃ m láº¡nh ngay láº­p tá»©c. KhÃ´ng bao giá» Ä‘Ã´ng láº¡nh, khÃ´ng bao giá» Ä‘á»ƒ ká»‡. TÆ°Æ¡i tá»‘i Ä‘a, dinh dÆ°á»¡ng tá»‘i Ä‘a.',
      'pm.process.s4_hand':    'giao láº¡nh',
      'pm.process.s4_title':   'Giao Ä‘áº¿n cá»­a',
      'pm.process.s4_desc':    'ÄÃ³ng gÃ³i trong há»™p cÃ¡ch nhiá»‡t vÃ  giao trong vÃ²ng 24 giá» sau khi chuáº©n bá»‹. Giao hÃ ng miá»…n phÃ­, luÃ´n luÃ´n, má»i Ä‘Æ¡n hÃ ng.',

      'pm.kitchen.hand':       'tá»« báº¿p cá»§a chÃºng tÃ´i, vá»›i sá»± chÄƒm sÃ³c',
      'pm.kitchen.headline':   'Náº¥u trong máº» nhá».<br><em>KhÃ´ng bao giá» sáº£n xuáº¥t Ä‘áº¡i trÃ .</em>',
      'pm.kitchen.body':       'Má»—i cÃ´ng thá»©c Ä‘Æ°á»£c chuáº©n bá»‹ báº±ng tay trong báº¿p cÃ³ phÃ©p â€” khÃ´ng bÄƒng chuyá»n, khÃ´ng mÃ¡y mÃ³c cÃ´ng nghiá»‡p. ChÃºng tÃ´i náº¥u nhÆ° báº¡n sáº½ náº¥u á»Ÿ nhÃ : cáº©n tháº­n, chÃº tÃ¢m vÃ  vá»›i tÃ¬nh yÃªu tháº­t sá»± vá»›i nhá»¯ng gÃ¬ chÃºng tÃ´i Ä‘ang lÃ m.',
      'pm.kitchen.li1':        'Báº¿p thÆ°Æ¡ng máº¡i Ä‘Æ°á»£c cáº¥p phÃ©p & kiá»ƒm tra',
      'pm.kitchen.li2':        'KÃ­ch thÆ°á»›c máº» tá»‘i Ä‘a: 50 kháº©u pháº§n má»—i láº§n náº¥u',
      'pm.kitchen.li3':        'Ghi láº¡i nhiá»‡t Ä‘á»™ á»Ÿ má»—i bÆ°á»›c',
      'pm.kitchen.li4':        'Náº¥u theo Ä‘Æ¡n â€” khÃ´ng bao giá» lÃ m sáºµn hay tÃ­ch trá»¯',

      'pm.ing.note':           'nhá»¯ng gÃ¬ bÃªn trong',
      'pm.ing.eyebrow':        'NguyÃªn liá»‡u cá»§a chÃºng tÃ´i',
      'pm.ing.headline':       'Chá»‰ nhá»¯ng <em>thá»© tá»‘t nháº¥t</em>',
      'pm.ing.badge':          'Cháº¥t lÆ°á»£ng ngÆ°á»i Â· há»¯u cÆ¡ chá»©ng nháº­n',
      'pm.ing.showcase_hand':  'lÃ m tÆ°Æ¡i, má»—i Ä‘Æ¡n hÃ ng',
      'pm.ing.chicken':        'GÃ  tháº£ rá»«ng',
      'pm.ing.chicken_note':   'protein náº¡c',
      'pm.ing.salmon':         'CÃ¡ há»“i tá»± nhiÃªn',
      'pm.ing.salmon_note':    'giÃ u omega-3',
      'pm.ing.beef':           'BÃ² Äƒn cá»',
      'pm.ing.beef_note':      'sáº¯t cao',
      'pm.ing.potato':         'Khoai lang',
      'pm.ing.potato_note':    'tinh bá»™t phá»©c táº¡p',
      'pm.ing.broccoli':       'BÃ´ng cáº£i xanh',
      'pm.ing.broccoli_note':  'vitamin C+K',
      'pm.ing.berry':          'Viá»‡t quáº¥t',
      'pm.ing.berry_note':     'cháº¥t chá»‘ng oxy hÃ³a',
      'pm.ing.carrot':         'CÃ  rá»‘t há»¯u cÆ¡',
      'pm.ing.carrot_note':    'beta carotene',
      'pm.ing.rice':           'Gáº¡o lá»©t',
      'pm.ing.rice_note':      'cháº¥t xÆ¡ dá»… tiÃªu',
      'pm.ing.eggs':           'Trá»©ng Ä‘á»“ng cá»',
      'pm.ing.eggs_note':      'protein hoÃ n chá»‰nh',
      'pm.ing.oil':            'Dáº§u Ã´ liu',
      'pm.ing.oil_note':       'cháº¥t bÃ©o lÃ nh máº¡nh',
      'pm.ing.herbs':          'MÃ¹i tÃ¢y & Tháº£o má»™c',
      'pm.ing.herbs_note':     'hÆ¡i thá»Ÿ + tiÃªu hÃ³a',
      'pm.ing.supp':           'Thá»±c pháº©m bá»• sung thÃº y',
      'pm.ing.supp_note':      'cÃ´ng thá»©c cÃ¢n báº±ng',

      'pm.nut.eyebrow':        'Dinh dÆ°á»¡ng cÃ¢n báº±ng',
      'pm.nut.headline':       'ÄÆ°á»£c cÃ´ng thá»©c bá»Ÿi <em>chuyÃªn gia dinh dÆ°á»¡ng thÃº y</em>',
      'pm.nut.hand':           'dá»±a trÃªn khoa há»c, lÃ m vá»›i tÃ¬nh yÃªu',
      'pm.nut.n1_title':       'Há»“ sÆ¡ amino acid hoÃ n chá»‰nh',
      'pm.nut.n1_desc':        'Protein Ä‘á»™ng váº­t cháº¥t lÆ°á»£ng cao cung cáº¥p táº¥t cáº£ amino acid thiáº¿t yáº¿u cho duy trÃ¬ cÆ¡ báº¯p, phá»¥c há»“i mÃ´ vÃ  chá»©c nÄƒng miá»…n dá»‹ch.',
      'pm.nut.n2_title':       'CÃ¢n báº±ng omega-3 & omega-6',
      'pm.nut.n2_desc':        'CÃ¡ há»“i tá»± nhiÃªn vÃ  háº¡t lanh cung cáº¥p tá»· lá»‡ axit bÃ©o phÃ¹ há»£p cho bá»™ lÃ´ng bÃ³ng mÆ°á»£t, khá»›p khá»e vÃ  giáº£m viÃªm.',
      'pm.nut.n3_title':       'Cháº¥t xÆ¡ giÃ u prebiotic',
      'pm.nut.n3_desc':        'Rau quáº£ vÃ  ngÅ© cá»‘c nguyÃªn háº¡t giÃºp há»‡ vi sinh Ä‘Æ°á»ng ruá»™t khá»e máº¡nh, há»— trá»£ tiÃªu hÃ³a, miá»…n dá»‹ch vÃ  sá»± minh máº«n.',
      'pm.nut.n4_title':       'Äáº§y Ä‘á»§ vi cháº¥t dinh dÆ°á»¡ng',
      'pm.nut.n4_desc':        'ÄÆ°á»£c bá»• sung há»—n há»£p thá»±c pháº©m bá»• sung cáº¥p thÃº y Ä‘á»ƒ Ä‘Ã¡p á»©ng hÆ°á»›ng dáº«n dinh dÆ°á»¡ng AAFCO cho táº¥t cáº£ giai Ä‘oáº¡n sá»‘ng.',
      'pm.nut.sticker_hand':   'lÃ m vá»›i tÃ¬nh yÃªu',
      'pm.nut.sticker_label':  'má»—i máº» Ä‘á»u váº­y',

      'pm.quote.quote':        '"NguyÃªn liá»‡u tháº­t. CÃ´ng thá»©c tháº­t.<br><em>KhÃ¡c biá»‡t tháº­t.</em>"',
      'pm.quote.hand':         'â€” lÃ m tÆ°Æ¡i táº¡i báº¿p chÃºng tÃ´i, giao Ä‘áº¿n cá»­a báº¡n',

      'pm.plans.eyebrow':      'GÃ³i bá»¯a Äƒn',
      'pm.plans.headline':     'Chá»n <em>gÃ³i hoÃ n háº£o</em> cá»§a báº¡n',
      'pm.plans.sub':          'Kháº©u pháº§n phÃ¹ há»£p dá»±a trÃªn giá»‘ng, tuá»•i, cÃ¢n náº·ng vÃ  má»©c Ä‘á»™ hoáº¡t Ä‘á»™ng. Táº¡m dá»«ng hoáº·c há»§y báº¥t cá»© lÃºc nÃ o.',
      'pm.plans.p1_name':      'CÆ¡ báº£n',
      'pm.plans.p1_hand':      'tuyá»‡t vá»i Ä‘á»ƒ thá»­ nghiá»‡m tÆ°Æ¡i',
      'pm.plans.p1_amount':    '$39',
      'pm.plans.p1_period':    '/ tuáº§n',
      'pm.plans.p1_f1':        '7 kháº©u pháº§n tÆ°Æ¡i hÃ ng ngÃ y',
      'pm.plans.p1_f2':        '1 lá»±a chá»n protein (gÃ  hoáº·c bÃ²)',
      'pm.plans.p1_f3':        'Bao gá»“m mÃ¡y tÃ­nh kháº©u pháº§n',
      'pm.plans.p1_f4':        'Giao láº¡nh miá»…n phÃ­',
      'pm.plans.p1_cta':       'Báº¯t Ä‘áº§u ngay',
      'pm.plans.p2_popular':   'ÄÆ°á»£c chá»n nhiá»u nháº¥t',
      'pm.plans.p2_name':      'Cá»• Ä‘iá»ƒn',
      'pm.plans.p2_hand':      'gÃ³i Ä‘Æ°á»£c yÃªu thÃ­ch nháº¥t',
      'pm.plans.p2_amount':    '$69',
      'pm.plans.p2_period':    '/ tuáº§n',
      'pm.plans.p2_f1':        '14 kháº©u pháº§n tÆ°Æ¡i hÃ ng ngÃ y',
      'pm.plans.p2_f2':        '3 cÃ´ng thá»©c protein xoay vÃ²ng',
      'pm.plans.p2_f3':        'Kiá»ƒm tra dinh dÆ°á»¡ng bÃ¡c sÄ©',
      'pm.plans.p2_f4':        'Giao láº¡nh miá»…n phÃ­',
      'pm.plans.p2_f5':        'Táº¡m dá»«ng hoáº·c bá» qua báº¥t cá»© lÃºc',
      'pm.plans.p2_cta':       'Chá»n Cá»• Ä‘iá»ƒn',
      'pm.plans.p3_name':      'Cao cáº¥p',
      'pm.plans.p3_hand':      'cho nhá»¯ng gÃ¬ tá»‘t nháº¥t',
      'pm.plans.p3_amount':    '$109',
      'pm.plans.p3_period':    '/ tuáº§n',
      'pm.plans.p3_f1':        '21 kháº©u pháº§n tÃ¹y chá»‰nh hoÃ n toÃ n',
      'pm.plans.p3_f2':        '5 cÃ´ng thá»©c â€” cÃ¡ há»“i, nai & nhiá»u hÆ¡n',
      'pm.plans.p3_f3':        'ChuyÃªn gia dinh dÆ°á»¡ng thÃº y riÃªng',
      'pm.plans.p3_f4':        'BÃ¡o cÃ¡o sá»©c khá»e hÃ ng thÃ¡ng',
      'pm.plans.p3_f5':        'Giao hÃ ng Æ°u tiÃªn miá»…n phÃ­',
      'pm.plans.p3_cta':       'NÃ¢ng cáº¥p Cao cáº¥p',

      'pm.del.eyebrow':        'Giao hÃ ng miá»…n phÃ­',
      'pm.del.headline':       'Giao láº¡nh,<br><em>má»—i láº§n.</em>',
      'pm.del.hand':           'giao láº¡nh & tÆ°Æ¡i',
      'pm.del.sub':            'ChÃºng tÃ´i dÃ¹ng há»™p cÃ¡ch nhiá»‡t vÃ  tÃºi Ä‘Ã¡ Ä‘á»ƒ Ä‘áº£m báº£o bá»¯a Äƒn cá»§a thÃº cÆ°ng Ä‘áº¿n á»Ÿ nhiá»‡t Ä‘á»™ hoÃ n háº£o â€” dÃ¹ thá»i tiáº¿t hay khoáº£ng cÃ¡ch tháº¿ nÃ o.',
      'pm.del.s1':             'Äáº·t hÃ ng',
      'pm.del.s2':             'ChÃºng tÃ´i náº¥u',
      'pm.del.s3':             'ÄÃ³ng gÃ³i láº¡nh',
      'pm.del.s4':             'Giao hÃ ng',
      'pm.del.s5':             'ThÆ°á»Ÿng thá»©c',
      'pm.del.cta':            'Báº¯t Ä‘áº§u Ä‘Æ¡n hÃ ng Ä‘áº§u tiÃªn',

      'pm.cta.eyebrow':        'Báº¯t Ä‘áº§u hÃ´m nay',
      'pm.cta.headline':       'Mang Ä‘áº¿n cho thÃº cÆ°ng thá»©c Äƒn<br>chÃºng <em>thá»±c sá»± xá»©ng Ä‘Ã¡ng.</em>',
      'pm.cta.hand':           'â€” vá»›i tÃ¬nh yÃªu, tá»« báº¿p chÃºng tÃ´i Ä‘áº¿n cá»­a báº¡n',
      'pm.cta.sub':            'Nháº­p email vÃ  chÃºng tÃ´i sáº½ gá»­i hÆ°á»›ng dáº«n bá»¯a Äƒn miá»…n phÃ­ â€” bao gá»“m mÃ¡y tÃ­nh kháº©u pháº§n cÃ¡ nhÃ¢n hÃ³a vÃ  cÃ´ng thá»©c khá»Ÿi Ä‘áº§u tá»‘t nháº¥t cá»§a chÃºng tÃ´i.',
      'pm.cta.ph':             'email@cuaban.com',
      'pm.cta.btn':            'Nháº­n hÆ°á»›ng dáº«n miá»…n phÃ­',
      'pm.cta.note':           'KhÃ´ng spam bao giá». Giao hÃ ng miá»…n phÃ­ cho Ä‘Æ¡n Ä‘áº§u tiÃªn.',

      /* â”€â”€ SERVICES PAGE â€” CARDS */
      'svc_page.c1.tag':       'ThÃº y',
      'svc_page.c1.name':      'Dá»‹ch vá»¥ ThÃº y',
      'svc_page.c1.desc':      'KhÃ¡m sá»©c khá»e toÃ n diá»‡n vÃ  chÄƒm sÃ³c y táº¿ cÃ¡ nhÃ¢n hÃ³a bá»Ÿi bÃ¡c sÄ© thÃº y cÃ³ chá»©ng chá»‰.',
      'svc_page.c1.price':     'Tá»« $65',
      'svc_page.c1.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.c2.tag':       'ChÄƒm sÃ³c lÃ´ng',
      'svc_page.c2.name':      'Cháº£i lÃ´ng & Spa',
      'svc_page.c2.desc':      'Dá»‹ch vá»¥ cháº£i lÃ´ng cao cáº¥p dÃ¹ng sáº£n pháº©m há»¯u cÆ¡ vÃ  ká»¹ thuáº­t sá»©c khá»e hiá»‡n Ä‘áº¡i.',
      'svc_page.c2.price':     'Tá»« $45',
      'svc_page.c2.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.c3.tag':       'LÆ°u trÃº',
      'svc_page.c3.name':      'KhÃ¡ch sáº¡n ThÃº cÆ°ng',
      'svc_page.c3.desc':      'LÆ°u trÃº cao cáº¥p thoáº£i mÃ¡i vá»›i sá»± quan tÃ¢m cÃ¡ nhÃ¢n vÃ  giÃ¡m sÃ¡t chÄƒm sÃ³c suá»‘t ngÃ y Ä‘Ãªm.',
      'svc_page.c3.price':     'Tá»« $80',
      'svc_page.c3.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.c4.tag':       'PhÃ²ng ngá»«a',
      'svc_page.c4.name':      'TiÃªm phÃ²ng',
      'svc_page.c4.desc':      'Lá»‹ch tiÃªm phÃ²ng phÃ¹ há»£p dá»±a trÃªn Ä‘á»™ tuá»•i, lá»‘i sá»‘ng vÃ  tÃ¬nh tráº¡ng sá»©c khá»e hiá»‡n táº¡i cá»§a thÃº cÆ°ng.',
      'svc_page.c4.price':     'Tá»« $35',
      'svc_page.c4.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.c5.tag':       'Sá»©c khá»e',
      'svc_page.c5.name':      'GÃ³i Sá»©c khá»e',
      'svc_page.c5.desc':      'ChÆ°Æ¡ng trÃ¬nh phÃ²ng ngá»«a táº­p trung vÃ o sá»©c khá»e lÃ¢u dÃ i, cÃ¢n báº±ng dinh dÆ°á»¡ng vÃ  hÆ°á»›ng dáº«n hoáº¡t Ä‘á»™ng.',
      'svc_page.c5.price':     'Tá»« $55',
      'svc_page.c5.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.c6.tag':       'Dinh dÆ°á»¡ng',
      'svc_page.c6.name':      'TÆ° váº¥n Dinh dÆ°á»¡ng',
      'svc_page.c6.desc':      'Káº¿ hoáº¡ch cháº¿ Ä‘á»™ Äƒn cÃ¡ nhÃ¢n hÃ³a Ä‘Æ°á»£c phÃ¡t triá»ƒn bá»Ÿi chuyÃªn gia dinh dÆ°á»¡ng cÃ³ chá»©ng chá»‰ Ä‘á»ƒ tá»‘i Æ°u hÃ³a sá»©c khá»e.',
      'svc_page.c6.price':     'Tá»« $40',
      'svc_page.c6.cta':       'Äáº·t lá»‹ch ngay',
      'svc_page.w1.title':     'ChuyÃªn gia CÃ³ chá»©ng chá»‰',
      'svc_page.w1.text':      'Má»i thÃ nh viÃªn Ä‘á»™i ngÅ© Ä‘á»u cÃ³ chá»©ng chá»‰ Ä‘Æ°á»£c cÃ´ng nháº­n vÃ  táº­n tÃ¢m vá»›i tiÃªu chuáº©n chÄƒm sÃ³c thÃº cÆ°ng hiá»‡n Ä‘áº¡i.',
      'svc_page.w2.title':     'Há»— trá»£ 24/7',
      'svc_page.w2.text':      'ChÄƒm sÃ³c vÃ  há»— trá»£ suá»‘t ngÃ y Ä‘Ãªm Ä‘á»ƒ thÃº cÆ°ng luÃ´n trong bÃ n tay an toÃ n, chu Ä‘Ã¡o.',
      'svc_page.w3.title':     'MÃ´i trÆ°á»ng BÃ¬nh yÃªn',
      'svc_page.w3.text':      'KhÃ´ng gian Ä‘Æ°á»£c thiáº¿t káº¿ chu Ä‘Ã¡o Ä‘á»ƒ giáº£m cÄƒng tháº³ng vÃ  táº¡o tráº£i nghiá»‡m bÃ¬nh yÃªn cho má»i thÃº cÆ°ng.',
      'svc_page.w4.title':     'Sáº£n pháº©m Cao cáº¥p',
      'svc_page.w4.text':      'Chá»‰ sá»­ dá»¥ng cÃ¡c sáº£n pháº©m sá»©c khá»e vÃ  chÄƒm sÃ³c lÃ´ng Ä‘Æ°á»£c bÃ¡c sÄ© thÃº y phÃª duyá»‡t vÃ  lá»±a chá»n ká»¹ cÃ ng.',

      /* â”€â”€ ABOUT PAGE â€” CARDS */
      'abt.story.p1':          'NÄƒm 2018, má»™t nhÃ³m nhá» bÃ¡c sÄ© thÃº y vÃ  nhá»¯ng ngÆ°á»i Ä‘am mÃª sá»©c khá»e thÃº cÆ°ng Ä‘Ã£ cÃ¹ng nhau táº¡i má»™t phÃ²ng khÃ¡m khiÃªm tá»‘n vá»›i má»™t má»¥c tiÃªu: Ä‘á»‹nh nghÄ©a láº¡i tiÃªu chuáº©n chÄƒm sÃ³c thÃº cÆ°ng. ChÃºng tÃ´i Ä‘Ã£ má»‡t má»i vá»›i mÃ´i trÆ°á»ng láº¡nh láº½o, lÃ¢m sÃ ng gÃ¢y cÄƒng tháº³ng cho cáº£ thÃº cÆ°ng vÃ  gia Ä‘Ã¬nh chÃºng.',
      'abt.story.p2':          'ChÃºng tÃ´i muá»‘n Ä‘iá»u gÃ¬ Ä‘Ã³ khÃ¡c â€” khÃ´ng gian áº¥m Ã¡p, chÄƒm sÃ³c minh báº¡ch, giao tiáº¿p Æ°u tiÃªn con ngÆ°á»i vÃ  phÆ°Æ¡ng phÃ¡p Ä‘iá»u trá»‹ dá»±a trÃªn khoa há»c sá»©c khá»e má»›i nháº¥t. Ã tÆ°á»Ÿng Ä‘Ã³ phÃ¡t triá»ƒn thÃ nh Petcare Spa.',
      'abt.story.p3':          'HÃ´m nay chÃºng tÃ´i phá»¥c vá»¥ hÃ ng nghÃ¬n thÃº cÆ°ng vÃ  gia Ä‘Ã¬nh trÃªn kháº¯p thÃ nh phá»‘, nhÆ°ng trÃ¡i tim cá»§a nhá»¯ng gÃ¬ chÃºng tÃ´i lÃ m chÆ°a bao giá» thay Ä‘á»•i. Má»—i láº§n thÄƒm khÃ¡m nÃªn cáº£m tháº¥y nhÆ° trá»Ÿ vá» nhÃ .',
      'abt.v1.title':          'LÃ²ng tráº¯c áº©n',
      'abt.v1.text':           'Má»i con váº­t bÆ°á»›c qua cá»­a chÃºng tÃ´i Ä‘á»u Ä‘Æ°á»£c Ä‘á»‘i xá»­ vá»›i sá»± tá»­ táº¿ chÃ¢n tháº­t. ChÃºng tÃ´i láº¯ng nghe, quan sÃ¡t vÃ  thÃ­ch nghi chÄƒm sÃ³c cho tá»«ng nhu cáº§u cÃ¡ nhÃ¢n cá»§a thÃº cÆ°ng.',
      'abt.v2.title':          'Tin tÆ°á»Ÿng',
      'abt.v2.text':           'ChÃºng tÃ´i tin ráº±ng cÃ¡c gia Ä‘Ã¬nh thÃº cÆ°ng xá»©ng Ä‘Ã¡ng vá»›i sá»± minh báº¡ch hoÃ n toÃ n. Tá»« cháº©n Ä‘oÃ¡n Ä‘áº¿n giÃ¡ cáº£, chÃºng tÃ´i giao tiáº¿p trung thá»±c vÃ  khÃ´ng bao giá» khuyáº¿n nghá»‹ nhá»¯ng gÃ¬ khÃ´ng cáº§n thiáº¿t.',
      'abt.v3.title':          'ChÄƒm sÃ³c Hiá»‡n Ä‘áº¡i',
      'abt.v3.text':           'ChÃºng tÃ´i Ä‘áº§u tÆ° liÃªn tá»¥c vÃ o cÃ¡c ká»¹ thuáº­t, thiáº¿t bá»‹ vÃ  Ä‘Ã o táº¡o má»›i nháº¥t. Äá»™i ngÅ© cá»§a chÃºng tÃ´i luÃ´n Ä‘á»©ng Ä‘áº§u trong khoa há»c thÃº y vÃ  sá»©c khá»e.',
      'abt.v4.title':          'Æ¯u tiÃªn Sá»©c khá»e',
      'abt.v4.text':           'PhÃ²ng bá»‡nh quan trá»ng hÆ¡n Ä‘iá»u trá»‹. CÃ¡ch tiáº¿p cáº­n cá»§a chÃºng tÃ´i Æ°u tiÃªn sá»©c khá»e lÃ¢u dÃ i, dinh dÆ°á»¡ng cÃ¢n báº±ng vÃ  láº­p káº¿ hoáº¡ch sá»©c khá»e chá»§ Ä‘á»™ng cho má»i giai Ä‘oáº¡n sá»‘ng.',
      'abt.t1.role':           'BÃ¡c sÄ© ThÃº y TrÆ°á»Ÿng',
      'abt.t1.bio':            '15 nÄƒm kinh nghiá»‡m lÃ¢m sÃ ng táº­p trung vÃ o y há»c phÃ²ng ngá»«a vÃ  sá»©c khá»e ná»™i khoa. ÄÆ°á»£c chá»©ng nháº­n bá»Ÿi AVMA.',
      'abt.t2.role':           'TrÆ°á»Ÿng phÃ²ng Cháº£i lÃ´ng',
      'abt.t2.bio':            'Thá»£ cháº£i lÃ´ng Ä‘oáº¡t giáº£i vá»›i chuyÃªn mÃ´n chÄƒm sÃ³c theo giá»‘ng, Ä‘iá»u trá»‹ giáº£m dá»‹ á»©ng vÃ  xá»­ lÃ½ khÃ´ng cÄƒng tháº³ng.',
      'abt.t3.role':           'Äiá»u phá»‘i viÃªn Sá»©c khá»e',
      'abt.t3.bio':            'ChuyÃªn gia hÃ nh vi thÃº cÆ°ng vÃ  láº­p káº¿ hoáº¡ch sá»©c khá»e toÃ n diá»‡n. Thiáº¿t káº¿ chÆ°Æ¡ng trÃ¬nh sá»©c khá»e dÃ i háº¡n cÃ¡ nhÃ¢n hÃ³a cho má»i thÃº cÆ°ng.',
      'abt.t4.role':           'ChuyÃªn gia Dinh dÆ°á»¡ng',
      'abt.t4.bio':            'ChuyÃªn gia dinh dÆ°á»¡ng thÃº y cÃ³ chá»©ng chá»‰ vá»›i chuyÃªn mÃ´n sÃ¢u vá» cháº¿ Ä‘á»™ Äƒn trá»‹ liá»‡u, quáº£n lÃ½ cÃ¢n náº·ng vÃ  sá»©c khá»e chuyá»ƒn hÃ³a.',
      'abt.cta.headline':      'Sáºµn sÃ ng mang Ä‘áº¿n Ä‘iá»u tá»‘t nháº¥t cho thÃº cÆ°ng <em>cá»§a báº¡n?</em>',
      'abt.cta.sub':           'Äáº·t lá»‹ch thÄƒm khÃ¡m hoáº·c khÃ¡m phÃ¡ Ä‘áº§y Ä‘á»§ cÃ¡c dá»‹ch vá»¥ cá»§a chÃºng tÃ´i. ChÃºng tÃ´i ráº¥t mong gáº·p thÃº cÆ°ng cá»§a báº¡n.',
      'abt.cta.btn1':          'Äáº·t lá»‹ch thÄƒm khÃ¡m',
      'abt.cta.btn2':          'KhÃ¡m phÃ¡ dá»‹ch vá»¥',
    }
  };

  /* â”€â”€ APPLY FUNCTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function apply(lang) {
    const t = T[lang] || T.EN;

    /* data-i18n â†’ textContent */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    /* data-i18n-html â†’ innerHTML */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    /* data-i18n-placeholder â†’ placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    /* â”€â”€ NAVBAR (no data-i18n needed in HTML) â”€â”€ */
    const navKeys = ['nav.home','nav.services','nav.about','nav.shop','nav.meals','nav.membership','nav.blog','nav.contact'];
    document.querySelectorAll('.navbar__nav li a').forEach((a, i) => {
      if (navKeys[i] && t[navKeys[i]]) a.textContent = t[navKeys[i]];
    });
    document.querySelectorAll('.navbar__mobile-menu a:not(.btn)').forEach((a, i) => {
      if (navKeys[i] && t[navKeys[i]]) a.textContent = t[navKeys[i]];
    });
    document.querySelectorAll('.navbar__actions a.btn-secondary').forEach(btn => {
      if (t['nav.signin']) btn.textContent = t['nav.signin'];
    });
    document.querySelectorAll('.navbar__actions a.btn-primary, .navbar__mobile-menu a.btn-primary').forEach(btn => {
      if (t['nav.book']) btn.textContent = t['nav.book'];
    });

    /* â”€â”€ FOOTER (no data-i18n needed in HTML) â”€â”€ */
    const sfTagline = document.querySelector('.sf-brand-tagline');
    if (sfTagline) sfTagline.textContent = t['footer.tagline'];

    const sfNlLabel = document.querySelector('.sf-nl-label');
    if (sfNlLabel) sfNlLabel.textContent = t['footer.newsletter'];

    const sfNlInput = document.querySelector('.sf-nl-input');
    if (sfNlInput) sfNlInput.placeholder = t['footer.email_ph'];

    const sfNlBtn = document.querySelector('.sf-nl-btn');
    if (sfNlBtn) sfNlBtn.textContent = t['footer.subscribe'];

    const colKeys = ['footer.col.contact', 'footer.col.membership', 'footer.col.navigate'];
    document.querySelectorAll('.sf-col-title').forEach((el, i) => {
      if (colKeys[i] && t[colKeys[i]]) el.textContent = t[colKeys[i]];
    });

    const footerLinkKeys = [
      ['footer.benefit.loyalty', 'footer.benefit.meals', 'footer.benefit.booking', 'footer.benefit.wellness'],
      ['nav.home', 'nav.services', 'nav.about', 'nav.shop', 'nav.meals', 'nav.membership', 'nav.blog', 'nav.contact'],
    ];
    document.querySelectorAll('.sf-links').forEach((group, gi) => {
      group.querySelectorAll('a').forEach((a, ai) => {
        const key = footerLinkKeys[gi]?.[ai];
        if (key && t[key]) a.textContent = t[key];
      });
    });

    const sfCtaHeadline = document.querySelector('.sf-cta__headline');
    if (sfCtaHeadline && t['footer.cta.headline']) sfCtaHeadline.textContent = t['footer.cta.headline'];

    const sfCtaBtns = document.querySelectorAll('.sf-cta__actions a');
    if (sfCtaBtns[0] && t['footer.cta.btn1']) sfCtaBtns[0].textContent = t['footer.cta.btn1'];
    if (sfCtaBtns[1] && t['footer.cta.btn2']) sfCtaBtns[1].textContent = t['footer.cta.btn2'];

    const trustChipKeys = ['footer.trust.vet', 'footer.trust.organic', 'footer.trust.delivery', 'footer.trust.handcrafted'];
    document.querySelectorAll('.sf-trust-chip span').forEach((span, i) => {
      if (trustChipKeys[i] && t[trustChipKeys[i]]) span.textContent = t[trustChipKeys[i]];
    });

    document.querySelectorAll('.sf-copy').forEach(el => {
      if (t['footer.copyright']) el.textContent = t['footer.copyright'];
    });

    /* â”€â”€ HTML lang attribute â”€â”€ */
    document.documentElement.lang = lang === 'VI' ? 'vi' : 'en';
  }

  /* â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  window.PCS = window.PCS || {};
  window.PCS.i18n = { apply, translations: T };

  /* Apply saved language on page load */
  const saved = localStorage.getItem('pcs_lang') || 'EN';
  document.addEventListener('DOMContentLoaded', () => apply(saved));
})();
