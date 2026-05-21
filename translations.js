/* ==================================================
   PETCARE SPA — i18n Localization System v1.0
   Languages: EN (English) | VI (Vietnamese)
   Frontend-only. Persists via localStorage('pcs_lang').
================================================== */

(function () {
  const T = {
    EN: {
      /* ── NAVIGATION */
      'nav.home':       'Home',
      'nav.services':   'Services',
      'nav.about':      'About',
      'nav.shop':       'Shop',
      'nav.meals':      'Pure Meals',
      'nav.membership': 'Membership',
      'nav.blog':       'Blog',
      'nav.contact':    'Contact',
      'nav.signin':   'Sign in',
      'nav.book':     'Book appointment',

      /* ── FOOTER */
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
      'footer.cta.btn2':      'Explore Pure Meals',
      'footer.trust.vet':          'Vet-approved',
      'footer.trust.organic':      'Organic ingredients',
      'footer.trust.delivery':     'Refrigerated delivery',
      'footer.trust.handcrafted':  'Handcrafted meals',
      'footer.copyright':    '© 2026 Petcare Spa. All rights reserved.',

      /* ── HOME — HERO */
      'home.hero.eyebrow':      'Premium pet wellness',
      'home.hero.headline':     'Care that <em>truly</em><br>puts your pet first',
      'home.hero.sub':          'Personalized veterinary care, professional grooming, and curated wellness — all under one roof. Because modern pets deserve modern care.',
      'home.hero.btn1':         'Book consultation',
      'home.hero.btn2':         'Explore services',
      'home.hero.stat1_label':  'Licensed vets',
      'home.hero.stat2_label':  'Happy pets',
      'home.hero.stat3_label':  'Average rating',
      'home.hero.stat4_label':  'Response time',
      'home.hero.badge_title':  'Vet-certified care',
      'home.hero.badge_sub':    'All services reviewed by specialists',
      'home.hero.same_day':     'Same-day available',

      /* ── HOME — TRUST BAR */
      'trust.1': 'Vet-Nutritionist Developed',
      'trust.2': 'AAFCO Compliant',
      'trust.3': 'Human-Grade Ingredients',
      'trust.4': 'USDA Quality Meats',

      /* ── HOME — SERVICES SECTION */
      'home.svc.eyebrow':    'What we offer',
      'home.svc.headline':   'Every service your<br>pet will <em>love</em>',
      'home.svc.aside':      'Comprehensive care delivered with clinical precision and genuine warmth.',
      'svc.vet.name':        'Veterinary Care',
      'svc.vet.desc':        'Comprehensive examinations, diagnostics and treatment by board-certified veterinarians dedicated to your pet\'s long-term health.',
      'svc.vet.cta':         'Book now',
      'svc.grooming.name':   'Grooming & Spa',
      'svc.grooming.desc':   'Full-service grooming sessions with premium products — bath, style, nail care, and deep conditioning tailored to every coat type.',
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
      'svc.nutrition.desc':  'Bespoke dietary planning by veterinary nutritionists — from breed-specific needs to post-surgery recovery diets and weight management programs.',
      'svc.nutrition.cta':   'Learn more',

      /* ── HOME — PHILOSOPHY */
      'home.phil.eyebrow':   'Our philosophy',
      'home.phil.headline':  'Wellness is a journey,<br>not an <em>event</em>',
      'home.phil.body':      'We believe pet health is built in small, consistent moments — the right food, the right checkups, the right environment. Our team brings a preventive-first approach that treats pets like the individuals they are.',
      'home.phil.p1_title':  'Preventive first',
      'home.phil.p1_text':   'Regular health screenings catch issues early, before they become costly or painful.',
      'home.phil.p2_title':  'Emotionally aware',
      'home.phil.p2_text':   'We understand that stressed pets don\'t heal well. Every visit is designed for calm.',
      'home.phil.p3_title':  'Personalized plans',
      'home.phil.p3_text':   'No two pets are the same. We build individual care plans around breed, age and lifestyle.',
      'home.phil.cta':       'Our approach',

      /* ── HOME — PRODUCTS */
      'home.prod.eyebrow':   'Curated products',
      'home.prod.headline':  'The essentials, elevated',
      'home.prod.sub':       'Vet-recommended supplements, wellness kits and everyday care essentials.',
      'prod.tag1':           'Supplements',
      'prod.tag2':           'Grooming',
      'prod.tag3':           'Nutrition',
      'prod.tag4':           'Essentials',
      'home.prod.cta':       'View all products',

      /* ── HOME — HOW IT WORKS */
      'home.how.eyebrow':      'Getting started',
      'home.how.headline':     'Care made simple',
      'home.how.sub':          'From your first visit to ongoing wellness — every step designed to be effortless.',
      'home.how.step1_title':  'Book a consultation',
      'home.how.step1_desc':   'Choose a service and time that works for you. Same-day slots available. A specialist confirms within the hour.',
      'home.how.step1_tag':    'Takes 2 minutes',
      'home.how.step2_title':  'Your personalized plan',
      'home.how.step2_desc':   'After your first visit, our vet team builds a tailored wellness roadmap — nutrition, checkup schedule, and care priorities.',
      'home.how.step2_tag':    'Fully personalized',
      'home.how.step3_title':  'Ongoing wellness support',
      'home.how.step3_desc':   'Track your pet\'s health over time, receive reminders, and access your vet team anytime through the app.',
      'home.how.step3_tag':    'Always with you',

      /* ── HOME — TESTIMONIALS */
      'home.test.eyebrow':   'What pet parents say',
      'home.test.headline':  'Trusted by thousands',
      'home.test.sub':       'Real stories from real pet families across the city.',

      /* ── HOME — FAQ */
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

      /* ── HOME — CTA BAND */
      'home.cta.eyebrow':    'Ready to begin?',
      'home.cta.headline':   'Your pet\'s best<br>life starts <em>today</em>',
      'home.cta.sub':        'Join 12,000+ pet parents who trust Petcare Spa for every stage of their pet\'s wellness journey.',
      'home.cta.btn1':       'Book a consultation',
      'home.cta.btn2':       'View wellness plans',

      /* ── PROMO POPUP */
      'promo.label':         '✦ Special Offer',
      'promo.headline':      'Enjoy 20% off your<br>first grooming <em>session</em>',
      'promo.body':          'Join the Petcare Spa community for exclusive first-access offers and personalized wellness updates. New clients only.',
      'promo.cta':           'Claim my 20% off',
      'promo.skip':          'Maybe later',
      'promo.disable':       "Don't show again",
      'promo.media_pill':    'Welcome · 2026',

      /* ── SERVICES PAGE */
      'svc_page.hero.accent':   'crafted with care',
      'svc_page.hero.eyebrow':  'Premium Pet Care',
      'svc_page.hero.headline': 'Premium wellness<br><em>for modern pets.</em>',
      'svc_page.hero.body':     'Organic nutrition, grooming, and wellness services designed around comfort, trust, and long-term health.',
      'svc_page.hero.btn1':     'Book Appointment',
      'svc_page.hero.btn2':     'Explore Pure Meals',
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

      /* ── WELLNESS PAGE */
      'wlns.hero.eyebrow':   'Wellness Programs',
      'wlns.hero.headline':  'Preventive care that <em>changes everything.</em>',
      'wlns.hero.body':      'A wellness plan isn\'t just a product — it\'s a commitment to your pet\'s long-term health. Built around your pet\'s individual needs, every plan includes expert checkups, nutrition guidance, and always-on support.',
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

      /* ── SHOP PAGE */
      'shop.hero.eyebrow':   'Premium Pet Products',
      'shop.hero.headline':  'Curated essentials for healthier, happier pets.',
      'shop.hero.sub':       'Discover premium nutrition, wellness products, grooming essentials and modern accessories carefully selected by veterinary specialists.',
      'shop.hero.btn1':      'Shop now',
      'shop.hero.btn2':      'Browse categories',

      /* ── BLOG PAGE */
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

      /* ── ABOUT PAGE */
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

      /* ── CONTACT PAGE */
      'cnt.hero.eyebrow':        'Get in touch',
      'cnt.hero.headline':       'We\'re here for you <em>and your pet.</em>',
      'cnt.hero.body':           'Whether you have a question, want to book an appointment, or just want to say hello — our team is always ready to help.',
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

      /* ── BOOKING PAGE */
      'bk.help':    'Need help?',
      'bk.back':    'Back to site',
      'bk.step1':   'Service',
      'bk.step2':   'Your Pet',
      'bk.step3':   'Date & Time',
      'bk.step4':   'Details',
      'bk.step5':   'Confirm',

      /* ── POLICY PAGE */
      'plc.hero.eyebrow':    'Legal & Policies',
      'plc.hero.headline':   'Our policies,<br><em>clearly explained.</em>',

      /* ── PURE MEALS PAGE */
      'pm.hero.eyebrow':       'Pure Meals',
      'pm.hero.prehand':       '— freshly prepared, every batch',
      'pm.hero.headline':      'Real food,<br>made with <em>love.</em>',
      'pm.hero.sub':           'Handcrafted from organic, human-grade ingredients. Vet-formulated for balanced nutrition. Stored fresh and delivered cold to your door — because your pet deserves better than a bag of dust.',
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
      'pm.manifesto.pill1':    '🌿 No fillers, ever',
      'pm.manifesto.pill2':    '🔥 Gently cooked',
      'pm.manifesto.pill3':    '❄️ Fridge-fresh only',
      'pm.manifesto.pill4':    '🚚 Free cold delivery',
      'pm.manifesto.pill5':    '✓ Vet-formulated',

      'pm.why.eyebrow':        'Why it matters',
      'pm.why.headline':       'Fresh food.<br><em>Real results.</em>',
      'pm.why.body':           'We started Pure Meals because we kept seeing healthy pets decline on processed diets. Fresh, minimally processed food isn\'t a luxury — it\'s how animals were meant to eat. Every batch is prepared in small quantities, never frozen, never over-processed.',
      'pm.why.img_caption':    'organic sourced · locally grown',
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
      'pm.process.s1_desc':    'Ingredients sourced from certified organic farms — free-range proteins, seasonal vegetables, no pesticides.',
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
      'pm.kitchen.body':       'Every recipe is prepared by hand in our licensed kitchen — no conveyor belts, no industrial machinery. We cook the way you would at home: carefully, attentively, and with real love for what we\'re making.',
      'pm.kitchen.li1':        'Licensed & inspected commercial kitchen',
      'pm.kitchen.li2':        'Maximum batch size: 50 portions per cook',
      'pm.kitchen.li3':        'Temperature-logged at every step',
      'pm.kitchen.li4':        'Cooked to order — never pre-made or stockpiled',

      'pm.ing.note':           'what goes inside',
      'pm.ing.eyebrow':        'Our ingredients',
      'pm.ing.headline':       'Only the <em>good stuff</em>',
      'pm.ing.badge':          'Human-grade · certified organic',
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
      'pm.quote.hand':         '— made fresh in our kitchen, delivered to your door',

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
      'pm.plans.p3_f2':        '5 recipes — salmon, venison & more',
      'pm.plans.p3_f3':        'Dedicated vet nutritionist',
      'pm.plans.p3_f4':        'Monthly health report',
      'pm.plans.p3_f5':        'Priority free delivery',
      'pm.plans.p3_cta':       'Go Premium',

      'pm.del.eyebrow':        'Free delivery',
      'pm.del.headline':       'Delivered cold,<br><em>every time.</em>',
      'pm.del.hand':           'delivered cold & fresh',
      'pm.del.sub':            'We use insulated cold boxes and ice packs to ensure your pet\'s meals arrive at the perfect temperature — no matter the weather, no matter the distance.',
      'pm.del.s1':             'Order',
      'pm.del.s2':             'We cook',
      'pm.del.s3':             'Packed cold',
      'pm.del.s4':             'Delivered',
      'pm.del.s5':             'Enjoy',
      'pm.del.cta':            'Start your first order',

      'pm.cta.eyebrow':        'Start today',
      'pm.cta.headline':       'Give your pet the food<br>they <em>truly deserve.</em>',
      'pm.cta.hand':           '— with love, from our kitchen to yours',
      'pm.cta.sub':            'Enter your email and we\'ll send you a free meal guide — including a personalised portion calculator and our best starter recipe.',
      'pm.cta.ph':             'your@email.com',
      'pm.cta.btn':            'Get free guide',
      'pm.cta.note':           'No spam, ever. Free delivery on your first order.',

      /* ── SERVICES PAGE — CARDS */
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

      /* ── ABOUT PAGE — CARDS */
      'abt.story.p1':          'In 2018, a small team of veterinarians and pet wellness enthusiasts came together in a modest clinic with one goal: redefine the standard of pet care. We were tired of cold, clinical environments that stressed both pets and their families.',
      'abt.story.p2':          'We wanted something different — warm spaces, transparent care, human-first communication, and treatments grounded in the latest wellness science. That idea grew into Petcare Spa.',
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
      /* ── NAVIGATION */
      'nav.home':       'Trang chủ',
      'nav.services':   'Dịch vụ',
      'nav.about':      'Giới thiệu',
      'nav.shop':       'Cửa hàng',
      'nav.meals':      'Bữa ăn thuần khiết',
      'nav.membership': 'Thành viên',
      'nav.blog':       'Blog',
      'nav.contact':    'Liên hệ',
      'nav.signin':   'Đăng nhập',
      'nav.book':     'Đặt lịch hẹn',

      /* ── FOOTER */
      'footer.tagline':      'Sức khỏe hữu cơ, chăm sóc thẩm mỹ và dinh dưỡng thủ công cho gia đình thú cưng hiện đại.',
      'footer.newsletter':   'Bản tin',
      'footer.email_ph':     'email@cuaban.com',
      'footer.subscribe':    'Đăng ký',
      'footer.col.contact':     'Liên hệ',
      'footer.col.membership':  'Thành viên',
      'footer.col.navigate':    'Điều hướng',
      'footer.benefit.loyalty':   'Điểm thưởng thành viên',
      'footer.benefit.meals':     'Nâng cấp bữa ăn miễn phí',
      'footer.benefit.booking':   'Đặt lịch ưu tiên',
      'footer.benefit.wellness':  'Ưu đãi sức khỏe độc quyền',
      'footer.cta.headline':  'Mang đến cho thú cưng lối sống lành mạnh hơn.',
      'footer.cta.btn1':      'Đặt lịch hẹn',
      'footer.cta.btn2':      'Khám phá Pure Meals',
      'footer.trust.vet':          'Được bác sĩ phê duyệt',
      'footer.trust.organic':      'Nguyên liệu hữu cơ',
      'footer.trust.delivery':     'Giao hàng có bảo lạnh',
      'footer.trust.handcrafted':  'Bữa ăn thủ công',
      'footer.copyright':    '© 2026 Petcare Spa. Bản quyền đã được bảo hộ.',

      /* ── HOME — HERO */
      'home.hero.eyebrow':      'Chăm sóc sức khỏe thú cưng cao cấp',
      'home.hero.headline':     'Chăm sóc thật sự<br>đặt <em>thú cưng</em> lên hàng đầu',
      'home.hero.sub':          'Chăm sóc thú y cá nhân hóa, chải lông chuyên nghiệp và các gói sức khỏe tuyển chọn — tất cả dưới một mái nhà. Vì thú cưng hiện đại xứng đáng được chăm sóc hiện đại.',
      'home.hero.btn1':         'Đặt tư vấn',
      'home.hero.btn2':         'Khám phá dịch vụ',
      'home.hero.stat1_label':  'Bác sĩ có chứng chỉ',
      'home.hero.stat2_label':  'Thú cưng hạnh phúc',
      'home.hero.stat3_label':  'Đánh giá trung bình',
      'home.hero.stat4_label':  'Thời gian phản hồi',
      'home.hero.badge_title':  'Được bác sĩ thú y chứng nhận',
      'home.hero.badge_sub':    'Tất cả dịch vụ được chuyên gia kiểm duyệt',
      'home.hero.same_day':     'Có thể đặt trong ngày',

      /* ── HOME — TRUST BAR */
      'trust.1': 'Phát triển bởi Chuyên gia Dinh dưỡng',
      'trust.2': 'Đạt chuẩn AAFCO',
      'trust.3': 'Nguyên liệu chất lượng cao',
      'trust.4': 'Thịt chất lượng USDA',

      /* ── HOME — SERVICES SECTION */
      'home.svc.eyebrow':    'Chúng tôi cung cấp',
      'home.svc.headline':   'Mọi dịch vụ thú cưng<br>của bạn sẽ <em>yêu thích</em>',
      'home.svc.aside':      'Chăm sóc toàn diện với độ chính xác lâm sàng và sự ấm áp chân thật.',
      'svc.vet.name':        'Dịch vụ Thú y',
      'svc.vet.desc':        'Khám và điều trị toàn diện bởi bác sĩ thú y có chứng chỉ, tận tâm với sức khỏe lâu dài của thú cưng bạn.',
      'svc.vet.cta':         'Đặt lịch ngay',
      'svc.grooming.name':   'Chải lông & Spa',
      'svc.grooming.desc':   'Dịch vụ chải lông toàn diện với sản phẩm cao cấp — tắm, tạo kiểu, cắt móng và dưỡng lông sâu phù hợp mọi loại lông.',
      'svc.grooming.cta':    'Đặt lịch ngay',
      'svc.vacc.name':       'Tiêm phòng',
      'svc.vacc.desc':       'Lịch tiêm phòng chuẩn hóa do bác sĩ thú y thiết kế, bảo vệ thú cưng ở mọi giai đoạn với hồ sơ sức khỏe số.',
      'svc.vacc.cta':        'Đặt lịch ngay',
      'svc.surgery.name':    'Phẫu thuật thú cưng',
      'svc.surgery.desc':    'Các ca phẫu thuật được thực hiện tại cơ sở vô trùng hiện đại với giám sát gây mê toàn diện và hỗ trợ sau mổ.',
      'svc.surgery.cta':     'Tìm hiểu thêm',
      'svc.plans.name':      'Gói Sức khỏe',
      'svc.plans.desc':      'Gói thành viên hàng năm bao gồm chăm sóc phòng ngừa, ưu đãi, ưu tiên đặt lịch và kiểm tra sức khỏe hàng quý.',
      'svc.plans.cta':       'Xem các gói',
      'svc.nutrition.name':  'Tư vấn Dinh dưỡng',
      'svc.nutrition.desc':  'Lập kế hoạch dinh dưỡng cá nhân hóa bởi chuyên gia — từ nhu cầu theo giống đến chế độ ăn phục hồi sau phẫu thuật.',
      'svc.nutrition.cta':   'Tìm hiểu thêm',

      /* ── HOME — PHILOSOPHY */
      'home.phil.eyebrow':   'Triết lý của chúng tôi',
      'home.phil.headline':  'Sức khỏe là một hành trình,<br>không phải <em>sự kiện</em>',
      'home.phil.body':      'Chúng tôi tin rằng sức khỏe thú cưng được xây dựng trong những khoảnh khắc nhỏ nhặt, nhất quán — thức ăn phù hợp, kiểm tra đúng lúc, môi trường đúng đắn. Đội ngũ của chúng tôi theo triết lý phòng bệnh là trên hết, coi thú cưng như những cá thể riêng biệt.',
      'home.phil.p1_title':  'Phòng bệnh là ưu tiên',
      'home.phil.p1_text':   'Kiểm tra sức khỏe định kỳ giúp phát hiện vấn đề sớm, trước khi trở nên tốn kém hoặc đau đớn.',
      'home.phil.p2_title':  'Thấu cảm cảm xúc',
      'home.phil.p2_text':   'Chúng tôi hiểu rằng thú cưng căng thẳng sẽ khó hồi phục. Mỗi lần thăm khám đều được thiết kế để mang lại sự bình yên.',
      'home.phil.p3_title':  'Kế hoạch cá nhân hóa',
      'home.phil.p3_text':   'Không có hai thú cưng nào giống nhau. Chúng tôi xây dựng kế hoạch chăm sóc riêng dựa trên giống, tuổi và lối sống.',
      'home.phil.cta':       'Cách tiếp cận của chúng tôi',

      /* ── HOME — PRODUCTS */
      'home.prod.eyebrow':   'Sản phẩm tuyển chọn',
      'home.prod.headline':  'Những thiết yếu, được nâng tầm',
      'home.prod.sub':       'Thực phẩm bổ sung được bác sĩ thú y khuyên dùng, bộ chăm sóc sức khỏe và sản phẩm chăm sóc hàng ngày.',
      'prod.tag1':           'Thực phẩm bổ sung',
      'prod.tag2':           'Chăm sóc lông',
      'prod.tag3':           'Dinh dưỡng',
      'prod.tag4':           'Thiết yếu',
      'home.prod.cta':       'Xem tất cả sản phẩm',

      /* ── HOME — HOW IT WORKS */
      'home.how.eyebrow':      'Bắt đầu',
      'home.how.headline':     'Chăm sóc đơn giản hóa',
      'home.how.sub':          'Từ lần đầu ghé thăm đến chăm sóc lâu dài — mọi bước đều được thiết kế để dễ dàng.',
      'home.how.step1_title':  'Đặt tư vấn',
      'home.how.step1_desc':   'Chọn dịch vụ và thời gian phù hợp. Có thể đặt trong ngày. Chuyên gia xác nhận trong vòng một giờ.',
      'home.how.step1_tag':    'Chỉ 2 phút',
      'home.how.step2_title':  'Kế hoạch cá nhân của bạn',
      'home.how.step2_desc':   'Sau lần thăm khám đầu tiên, đội ngũ bác sĩ xây dựng lộ trình sức khỏe phù hợp — dinh dưỡng, lịch kiểm tra và ưu tiên chăm sóc.',
      'home.how.step2_tag':    'Hoàn toàn cá nhân hóa',
      'home.how.step3_title':  'Hỗ trợ sức khỏe liên tục',
      'home.how.step3_desc':   'Theo dõi sức khỏe thú cưng theo thời gian, nhận nhắc nhở và liên hệ đội ngũ bác sĩ bất cứ lúc nào qua ứng dụng.',
      'home.how.step3_tag':    'Luôn đồng hành',

      /* ── HOME — TESTIMONIALS */
      'home.test.eyebrow':   'Chia sẻ từ gia đình thú cưng',
      'home.test.headline':  'Được tin tưởng bởi hàng nghìn người',
      'home.test.sub':       'Những câu chuyện thật từ các gia đình thú cưng khắp thành phố.',

      /* ── HOME — FAQ */
      'home.faq.support_label': 'Hỗ trợ 24/7',
      'home.faq.eyebrow':       'Giải đáp thắc mắc',
      'home.faq.headline':      'Câu hỏi thường gặp,<br>được giải đáp tận tâm',
      'home.faq.body':          'Chúng tôi tin rằng chăm sóc thú cưng tốt bắt đầu từ sự rõ ràng, minh bạch và giao tiếp nhẹ nhàng. Đây là những câu hỏi được đặt ra thường xuyên nhất.',
      'home.faq.cta_label':     'Cần hỗ trợ ngay?',
      'home.faq.cta':           'Liên hệ hỗ trợ',
      'home.faq.q1':            'Tôi có thể mong đợi gì trong lần đầu tiên đưa thú cưng đến?',
      'home.faq.a1':            'Lần khám đầu tiên bao gồm đánh giá sức khỏe toàn diện, quan sát hành vi, tư vấn sức khỏe và các khuyến nghị cá nhân hóa phù hợp với độ tuổi và lối sống của thú cưng.',
      'home.faq.q2':            'Quy trình chải lông của bạn giảm căng thẳng cho thú cưng như thế nào?',
      'home.faq.a2':            'Chúng tôi sử dụng dụng cụ ít ồn, kỹ thuật xử lý nhẹ nhàng và nghỉ giải lao theo lịch để đảm bảo những thú cưng lo lắng luôn thoải mái trong suốt quá trình chải lông.',
      'home.faq.q3':            'Bạn có cung cấp gói sức khỏe cá nhân hóa không?',
      'home.faq.a3':            'Có. Mỗi gói sức khỏe được tùy chỉnh dựa trên giống, mức độ hoạt động, tuổi, dinh dưỡng và tiền sử bệnh lý.',
      'home.faq.q4':            'Tôi có thể nhận cập nhật trong suốt buổi hẹn không?',
      'home.faq.a4':            'Hoàn toàn có thể. Đội ngũ của chúng tôi cung cấp cập nhật, hình ảnh và ghi chú chăm sóc trong suốt các buổi chải lông hoặc điều trị dài hơn.',

      /* ── HOME — CTA BAND */
      'home.cta.eyebrow':    'Sẵn sàng bắt đầu?',
      'home.cta.headline':   'Cuộc sống tốt nhất<br>của thú cưng bắt đầu <em>hôm nay</em>',
      'home.cta.sub':        'Tham gia cùng hơn 12.000 gia đình thú cưng tin tưởng Petcare Spa cho từng giai đoạn trong hành trình sức khỏe của thú cưng.',
      'home.cta.btn1':       'Đặt tư vấn',
      'home.cta.btn2':       'Xem gói sức khỏe',

      /* ── PROMO POPUP */
      'promo.label':         '✦ Ưu đãi đặc biệt',
      'promo.headline':      'Giảm 20% cho buổi<br>chải lông <em>đầu tiên</em>',
      'promo.body':          'Tham gia cộng đồng Petcare Spa để nhận ưu đãi độc quyền và thông tin sức khỏe cá nhân hóa. Chỉ dành cho khách hàng mới.',
      'promo.cta':           'Nhận ngay ưu đãi 20%',
      'promo.skip':          'Để sau',
      'promo.disable':       'Không hiển thị nữa',
      'promo.media_pill':    'Chào mừng · 2026',

      /* ── SERVICES PAGE */
      'svc_page.hero.accent':   'chăm chút từng chi tiết',
      'svc_page.hero.eyebrow':  'Chăm sóc Thú cưng Cao cấp',
      'svc_page.hero.headline': 'Chăm sóc toàn diện<br><em>cho thú cưng hiện đại.</em>',
      'svc_page.hero.body':     'Dinh dưỡng hữu cơ, chải lông và dịch vụ chăm sóc sức khỏe được thiết kế xung quanh sự thoải mái, tin tưởng và sức khỏe lâu dài.',
      'svc_page.hero.btn1':     'Đặt lịch hẹn',
      'svc_page.hero.btn2':     'Khám phá bữa ăn',
      'svc_page.hero.trust1':   'Được kiểm duyệt bởi Thú y sĩ',
      'svc_page.hero.trust2':   'Nguyên liệu hữu cơ',
      'svc_page.hero.trust3':   'Bữa ăn tươi lạnh',
      'svc_page.stats.s1':      'Khách hàng hài lòng',
      'svc_page.stats.s2':      'Đánh giá Google',
      'svc_page.stats.s3':      'Năm kinh nghiệm',
      'svc_page.stats.s4':      'Hỗ trợ có sẵn',
      'svc_page.grid.eyebrow':  'Chúng tôi cung cấp',
      'svc_page.grid.headline': 'Mọi thứ thú cưng cần',
      'svc_page.grid.sub':      'Sáu dịch vụ chuyên biệt được cung cấp bởi chuyên gia trong môi trường hiện đại và bình yên.',
      'svc_page.why.eyebrow':   'Tại sao chọn chúng tôi',
      'svc_page.why.headline':  'Được thiết kế xung quanh sự thoải mái và tin tưởng',

      /* ── WELLNESS PAGE */
      'wlns.hero.eyebrow':   'Chương trình Sức khỏe',
      'wlns.hero.headline':  'Chăm sóc phòng ngừa <em>thay đổi tất cả.</em>',
      'wlns.hero.body':      'Gói sức khỏe không chỉ là sản phẩm — đó là cam kết với sức khỏe lâu dài của thú cưng bạn. Được xây dựng xung quanh nhu cầu cá nhân, mỗi gói bao gồm kiểm tra chuyên gia, tư vấn dinh dưỡng và hỗ trợ không giới hạn.',
      'wlns.hero.btn1':      'Xem các gói',
      'wlns.hero.btn2':      'Nói chuyện với chuyên gia',
      'wlns.hero.badge':     'Gói do bác sĩ thiết kế',
      'wlns.trust.s1':       'Thú cưng đã đăng ký',
      'wlns.trust.s2':       'Đánh giá thành viên',
      'wlns.trust.s3':       'Bất cứ lúc nào',
      'wlns.intro.eyebrow':  'Triết lý của chúng tôi',
      'wlns.intro.headline': 'Sức khỏe là hành trình, <em>không phải chuyến thăm duy nhất.</em>',
      'wlns.plans.eyebrow':  'Gói thành viên',
      'wlns.plans.headline': 'Chọn gói phù hợp cho thú cưng',
      'wlns.plans.sub':      'Mỗi gói bao gồm chuyên gia sức khỏe riêng, giá minh bạch và đăng ký linh hoạt theo tháng.',

      /* ── SHOP PAGE */
      'shop.hero.eyebrow':   'Sản phẩm Thú cưng Cao cấp',
      'shop.hero.headline':  'Thiết yếu được tuyển chọn cho thú cưng khỏe mạnh và hạnh phúc hơn.',
      'shop.hero.sub':       'Khám phá dinh dưỡng cao cấp, sản phẩm sức khỏe, dụng cụ chải lông và phụ kiện hiện đại được chuyên gia thú y lựa chọn cẩn thận.',
      'shop.hero.btn1':      'Mua ngay',
      'shop.hero.btn2':      'Duyệt danh mục',

      /* ── BLOG PAGE */
      'blog.hero.eyebrow':   'Tạp chí Petcare Spa',
      'blog.hero.headline':  'Câu chuyện sức khỏe,<br><em>chuyên gia chia sẻ.</em>',
      'blog.cats.all':       'Tất cả',
      'blog.cats.wellness':  'Sức khỏe',
      'blog.cats.nutrition': 'Dinh dưỡng',
      'blog.cats.grooming':  'Chăm sóc lông',
      'blog.cats.insights':  'Kiến thức thú cưng',
      'blog.cats.lifestyle': 'Lối sống',
      'blog.latest.eyebrow': 'Bài viết mới nhất',
      'blog.latest.headline':'Mới từ tạp chí',

      /* ── ABOUT PAGE */
      'abt.hero.eyebrow':    'Câu chuyện của chúng tôi',
      'abt.hero.headline':   'Được xây dựng từ tình yêu với <em>mọi loài vật.</em>',
      'abt.story.eyebrow':   'Khởi đầu như thế nào',
      'abt.story.headline':  'Phòng khám được sinh ra từ <em>niềm đam mê thực sự.</em>',
      'abt.values.eyebrow':  'Điều hướng dẫn chúng tôi',
      'abt.values.headline': 'Những giá trị chúng tôi xây dựng mỗi ngày',
      'abt.team.eyebrow':    'Những người đằng sau',
      'abt.team.headline':   'Gặp gỡ các chuyên gia của chúng tôi',
      'abt.team.sub':        'Đội ngũ chuyên gia được chứng nhận, chia sẻ niềm đam mê sâu sắc với phúc lợi động vật và chăm sóc thú cưng hiện đại.',
      'abt.metrics.s1':      'Thú cưng được chăm sóc',
      'abt.metrics.s2':      'Năm phục vụ tận tâm',
      'abt.metrics.s3':      'Nhân viên có chứng chỉ',
      'abt.metrics.s4':      'Đánh giá trung bình',

      /* ── CONTACT PAGE */
      'cnt.hero.eyebrow':        'Liên hệ',
      'cnt.hero.headline':       'Chúng tôi luôn ở đây cho bạn <em>và thú cưng.</em>',
      'cnt.hero.body':           'Dù bạn có câu hỏi, muốn đặt lịch hẹn, hay chỉ muốn chào hỏi — đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ.',
      'cnt.form.name_label':     'Họ và tên',
      'cnt.form.name_ph':        'Họ và tên của bạn',
      'cnt.form.email_label':    'Địa chỉ email',
      'cnt.form.phone_label':    'Số điện thoại',
      'cnt.form.pet_label':      'Loại thú cưng',
      'cnt.form.pet_ph':         'Chọn loại thú cưng',
      'cnt.form.subject_label':  'Tiêu đề',
      'cnt.form.subject_ph':     'Chúng tôi có thể giúp gì?',
      'cnt.form.msg_label':      'Tin nhắn',
      'cnt.form.msg_ph':         'Kể cho chúng tôi nghe về thú cưng và nhu cầu của bạn...',
      'cnt.form.submit':         'Gửi tin nhắn',
      'cnt.form.note':           'Chúng tôi sẽ phản hồi trong vòng 4 giờ làm việc.',
      'cnt.hours.eyebrow':       'Giờ làm việc',
      'cnt.hours.headline':      'Ghé thăm chúng tôi <em>bất cứ lúc nào.</em>',

      /* ── BOOKING PAGE */
      'bk.help':    'Cần trợ giúp?',
      'bk.back':    'Quay lại trang web',
      'bk.step1':   'Dịch vụ',
      'bk.step2':   'Thú cưng',
      'bk.step3':   'Ngày & Giờ',
      'bk.step4':   'Chi tiết',
      'bk.step5':   'Xác nhận',

      /* ── POLICY PAGE */
      'plc.hero.eyebrow':    'Chính sách & Điều khoản',
      'plc.hero.headline':   'Chính sách của chúng tôi,<br><em>giải thích rõ ràng.</em>',

      /* ── PURE MEALS PAGE */
      'pm.hero.eyebrow':       'Bữa ăn thuần khiết',
      'pm.hero.prehand':       '— chuẩn bị tươi ngon, từng mẻ',
      'pm.hero.headline':      'Thức ăn thật,<br>làm với <em>tình yêu.</em>',
      'pm.hero.sub':           'Thủ công từ nguyên liệu hữu cơ, chất lượng thực phẩm người. Được bác sĩ thú y công thức hóa cho dinh dưỡng cân bằng. Bảo quản tươi và giao lạnh đến cửa bạn — vì thú cưng của bạn xứng đáng hơn một túi bột.',
      'pm.hero.btn1':          'Khám phá gói bữa ăn',
      'pm.hero.btn2':          'Nguyên liệu của chúng tôi',
      'pm.hero.chip1':         'Nguyên liệu hữu cơ',
      'pm.hero.chip2':         'Chất lượng thực phẩm người',
      'pm.hero.chip3':         'Giao hàng miễn phí',
      'pm.hero.chip4':         'Được bác sĩ công thức',
      'pm.hero.badge_title':   'Được bác sĩ thú y phê duyệt',
      'pm.hero.badge_sub':     'Mọi công thức được chuyên gia dinh dưỡng kiểm duyệt',
      'pm.hero.tag_hand':      'giao hàng miễn phí',
      'pm.hero.tag_label':     'luôn bao gồm',

      'pm.manifesto.hand':     'triết lý của chúng tôi',
      'pm.manifesto.quote':    '"Thức ăn là thuốc. Chúng tôi tin rằng mỗi miếng thú cưng ăn<br>phải <em>nuôi dưỡng, không chỉ lấp đầy.</em>"',
      'pm.manifesto.pill1':    '🌿 Không chất độn, mãi mãi',
      'pm.manifesto.pill2':    '🔥 Nấu chín nhẹ nhàng',
      'pm.manifesto.pill3':    '❄️ Chỉ tươi trong tủ lạnh',
      'pm.manifesto.pill4':    '🚚 Giao lạnh miễn phí',
      'pm.manifesto.pill5':    '✓ Được bác sĩ công thức',

      'pm.why.eyebrow':        'Tại sao điều này quan trọng',
      'pm.why.headline':       'Thức ăn tươi.<br><em>Kết quả thực.</em>',
      'pm.why.body':           'Chúng tôi bắt đầu Pure Meals vì cứ thấy những thú cưng khỏe mạnh suy giảm vì chế độ ăn qua chế biến. Thức ăn tươi, ít qua chế biến không phải là xa xỉ — đó là cách động vật được tạo ra để ăn. Mỗi mẻ được chuẩn bị với số lượng nhỏ, không bao giờ đông lạnh, không bao giờ qua chế biến quá mức.',
      'pm.why.img_caption':    'nguồn hữu cơ · trồng địa phương',
      'pm.why.p1_title':       'Vấn đề với thức ăn khô',
      'pm.why.p1_desc':        'Được xử lý siêu ở nhiệt độ cực cao, đầy chất độn, chất bảo quản và phụ gia tổng hợp để tồn tại nhiều năm trên kệ. Không hẳn là điều thiên nhiên muốn.',
      'pm.why.p2_title':       'Những gì bữa ăn tươi cung cấp',
      'pm.why.p2_desc':        'Chất dinh dưỡng sinh học có sẵn, protein thật, chất xơ tự nhiên và nguyên liệu giàu độ ẩm hỗ trợ tiêu hóa, sức khỏe lông, năng lượng và sức khỏe lâu dài.',
      'pm.why.p3_title':       'Cam kết của chúng tôi với bạn',
      'pm.why.p3_desc':        'Nguyên liệu chất lượng người, nấu theo đơn hàng, chia khẩu phần chính xác cho độ tuổi và cân nặng của thú cưng, giao lạnh trong vòng 24 giờ sau khi chuẩn bị.',

      'pm.process.eyebrow':    'Được làm như thế nào',
      'pm.process.headline':   'Từ trang trại đến <em>bát ăn</em>',
      'pm.process.hand':       'thủ công trong mẻ nhỏ',
      'pm.process.s1_hand':    'nguồn hữu cơ',
      'pm.process.s1_title':   'Nguồn hữu cơ',
      'pm.process.s1_desc':    'Nguyên liệu từ các trang trại hữu cơ được chứng nhận — protein thả rừng, rau quả theo mùa, không thuốc trừ sâu.',
      'pm.process.s2_hand':    'làm với sự chăm sóc',
      'pm.process.s2_title':   'Thủ công tươi ngon',
      'pm.process.s2_desc':    'Nấu từng mẻ nhỏ bằng tay trong bếp chuyên dụng. Không dây chuyền công xưởng. Mỗi công thức được chuẩn bị nhẹ nhàng để giữ nguyên chất dinh dưỡng.',
      'pm.process.s3_hand':    'giữ lạnh & tươi',
      'pm.process.s3_title':   'Bảo quản trong tủ lạnh',
      'pm.process.s3_desc':    'Chia vào khay kín và làm lạnh ngay lập tức. Không bao giờ đông lạnh, không bao giờ để kệ. Tươi tối đa, dinh dưỡng tối đa.',
      'pm.process.s4_hand':    'giao lạnh',
      'pm.process.s4_title':   'Giao đến cửa',
      'pm.process.s4_desc':    'Đóng gói trong hộp cách nhiệt và giao trong vòng 24 giờ sau khi chuẩn bị. Giao hàng miễn phí, luôn luôn, mọi đơn hàng.',

      'pm.kitchen.hand':       'từ bếp của chúng tôi, với sự chăm sóc',
      'pm.kitchen.headline':   'Nấu trong mẻ nhỏ.<br><em>Không bao giờ sản xuất đại trà.</em>',
      'pm.kitchen.body':       'Mỗi công thức được chuẩn bị bằng tay trong bếp có phép — không băng chuyền, không máy móc công nghiệp. Chúng tôi nấu như bạn sẽ nấu ở nhà: cẩn thận, chú tâm và với tình yêu thật sự với những gì chúng tôi đang làm.',
      'pm.kitchen.li1':        'Bếp thương mại được cấp phép & kiểm tra',
      'pm.kitchen.li2':        'Kích thước mẻ tối đa: 50 khẩu phần mỗi lần nấu',
      'pm.kitchen.li3':        'Ghi lại nhiệt độ ở mỗi bước',
      'pm.kitchen.li4':        'Nấu theo đơn — không bao giờ làm sẵn hay tích trữ',

      'pm.ing.note':           'những gì bên trong',
      'pm.ing.eyebrow':        'Nguyên liệu của chúng tôi',
      'pm.ing.headline':       'Chỉ những <em>thứ tốt nhất</em>',
      'pm.ing.badge':          'Chất lượng người · hữu cơ chứng nhận',
      'pm.ing.showcase_hand':  'làm tươi, mỗi đơn hàng',
      'pm.ing.chicken':        'Gà thả rừng',
      'pm.ing.chicken_note':   'protein nạc',
      'pm.ing.salmon':         'Cá hồi tự nhiên',
      'pm.ing.salmon_note':    'giàu omega-3',
      'pm.ing.beef':           'Bò ăn cỏ',
      'pm.ing.beef_note':      'sắt cao',
      'pm.ing.potato':         'Khoai lang',
      'pm.ing.potato_note':    'tinh bột phức tạp',
      'pm.ing.broccoli':       'Bông cải xanh',
      'pm.ing.broccoli_note':  'vitamin C+K',
      'pm.ing.berry':          'Việt quất',
      'pm.ing.berry_note':     'chất chống oxy hóa',
      'pm.ing.carrot':         'Cà rốt hữu cơ',
      'pm.ing.carrot_note':    'beta carotene',
      'pm.ing.rice':           'Gạo lứt',
      'pm.ing.rice_note':      'chất xơ dễ tiêu',
      'pm.ing.eggs':           'Trứng đồng cỏ',
      'pm.ing.eggs_note':      'protein hoàn chỉnh',
      'pm.ing.oil':            'Dầu ô liu',
      'pm.ing.oil_note':       'chất béo lành mạnh',
      'pm.ing.herbs':          'Mùi tây & Thảo mộc',
      'pm.ing.herbs_note':     'hơi thở + tiêu hóa',
      'pm.ing.supp':           'Thực phẩm bổ sung thú y',
      'pm.ing.supp_note':      'công thức cân bằng',

      'pm.nut.eyebrow':        'Dinh dưỡng cân bằng',
      'pm.nut.headline':       'Được công thức bởi <em>chuyên gia dinh dưỡng thú y</em>',
      'pm.nut.hand':           'dựa trên khoa học, làm với tình yêu',
      'pm.nut.n1_title':       'Hồ sơ amino acid hoàn chỉnh',
      'pm.nut.n1_desc':        'Protein động vật chất lượng cao cung cấp tất cả amino acid thiết yếu cho duy trì cơ bắp, phục hồi mô và chức năng miễn dịch.',
      'pm.nut.n2_title':       'Cân bằng omega-3 & omega-6',
      'pm.nut.n2_desc':        'Cá hồi tự nhiên và hạt lanh cung cấp tỷ lệ axit béo phù hợp cho bộ lông bóng mượt, khớp khỏe và giảm viêm.',
      'pm.nut.n3_title':       'Chất xơ giàu prebiotic',
      'pm.nut.n3_desc':        'Rau quả và ngũ cốc nguyên hạt giúp hệ vi sinh đường ruột khỏe mạnh, hỗ trợ tiêu hóa, miễn dịch và sự minh mẫn.',
      'pm.nut.n4_title':       'Đầy đủ vi chất dinh dưỡng',
      'pm.nut.n4_desc':        'Được bổ sung hỗn hợp thực phẩm bổ sung cấp thú y để đáp ứng hướng dẫn dinh dưỡng AAFCO cho tất cả giai đoạn sống.',
      'pm.nut.sticker_hand':   'làm với tình yêu',
      'pm.nut.sticker_label':  'mỗi mẻ đều vậy',

      'pm.quote.quote':        '"Nguyên liệu thật. Công thức thật.<br><em>Khác biệt thật.</em>"',
      'pm.quote.hand':         '— làm tươi tại bếp chúng tôi, giao đến cửa bạn',

      'pm.plans.eyebrow':      'Gói bữa ăn',
      'pm.plans.headline':     'Chọn <em>gói hoàn hảo</em> của bạn',
      'pm.plans.sub':          'Khẩu phần phù hợp dựa trên giống, tuổi, cân nặng và mức độ hoạt động. Tạm dừng hoặc hủy bất cứ lúc nào.',
      'pm.plans.p1_name':      'Cơ bản',
      'pm.plans.p1_hand':      'tuyệt vời để thử nghiệm tươi',
      'pm.plans.p1_amount':    '$39',
      'pm.plans.p1_period':    '/ tuần',
      'pm.plans.p1_f1':        '7 khẩu phần tươi hàng ngày',
      'pm.plans.p1_f2':        '1 lựa chọn protein (gà hoặc bò)',
      'pm.plans.p1_f3':        'Bao gồm máy tính khẩu phần',
      'pm.plans.p1_f4':        'Giao lạnh miễn phí',
      'pm.plans.p1_cta':       'Bắt đầu ngay',
      'pm.plans.p2_popular':   'Được chọn nhiều nhất',
      'pm.plans.p2_name':      'Cổ điển',
      'pm.plans.p2_hand':      'gói được yêu thích nhất',
      'pm.plans.p2_amount':    '$69',
      'pm.plans.p2_period':    '/ tuần',
      'pm.plans.p2_f1':        '14 khẩu phần tươi hàng ngày',
      'pm.plans.p2_f2':        '3 công thức protein xoay vòng',
      'pm.plans.p2_f3':        'Kiểm tra dinh dưỡng bác sĩ',
      'pm.plans.p2_f4':        'Giao lạnh miễn phí',
      'pm.plans.p2_f5':        'Tạm dừng hoặc bỏ qua bất cứ lúc',
      'pm.plans.p2_cta':       'Chọn Cổ điển',
      'pm.plans.p3_name':      'Cao cấp',
      'pm.plans.p3_hand':      'cho những gì tốt nhất',
      'pm.plans.p3_amount':    '$109',
      'pm.plans.p3_period':    '/ tuần',
      'pm.plans.p3_f1':        '21 khẩu phần tùy chỉnh hoàn toàn',
      'pm.plans.p3_f2':        '5 công thức — cá hồi, nai & nhiều hơn',
      'pm.plans.p3_f3':        'Chuyên gia dinh dưỡng thú y riêng',
      'pm.plans.p3_f4':        'Báo cáo sức khỏe hàng tháng',
      'pm.plans.p3_f5':        'Giao hàng ưu tiên miễn phí',
      'pm.plans.p3_cta':       'Nâng cấp Cao cấp',

      'pm.del.eyebrow':        'Giao hàng miễn phí',
      'pm.del.headline':       'Giao lạnh,<br><em>mỗi lần.</em>',
      'pm.del.hand':           'giao lạnh & tươi',
      'pm.del.sub':            'Chúng tôi dùng hộp cách nhiệt và túi đá để đảm bảo bữa ăn của thú cưng đến ở nhiệt độ hoàn hảo — dù thời tiết hay khoảng cách thế nào.',
      'pm.del.s1':             'Đặt hàng',
      'pm.del.s2':             'Chúng tôi nấu',
      'pm.del.s3':             'Đóng gói lạnh',
      'pm.del.s4':             'Giao hàng',
      'pm.del.s5':             'Thưởng thức',
      'pm.del.cta':            'Bắt đầu đơn hàng đầu tiên',

      'pm.cta.eyebrow':        'Bắt đầu hôm nay',
      'pm.cta.headline':       'Mang đến cho thú cưng thức ăn<br>chúng <em>thực sự xứng đáng.</em>',
      'pm.cta.hand':           '— với tình yêu, từ bếp chúng tôi đến cửa bạn',
      'pm.cta.sub':            'Nhập email và chúng tôi sẽ gửi hướng dẫn bữa ăn miễn phí — bao gồm máy tính khẩu phần cá nhân hóa và công thức khởi đầu tốt nhất của chúng tôi.',
      'pm.cta.ph':             'email@cuaban.com',
      'pm.cta.btn':            'Nhận hướng dẫn miễn phí',
      'pm.cta.note':           'Không spam bao giờ. Giao hàng miễn phí cho đơn đầu tiên.',

      /* ── SERVICES PAGE — CARDS */
      'svc_page.c1.tag':       'Thú y',
      'svc_page.c1.name':      'Dịch vụ Thú y',
      'svc_page.c1.desc':      'Khám sức khỏe toàn diện và chăm sóc y tế cá nhân hóa bởi bác sĩ thú y có chứng chỉ.',
      'svc_page.c1.price':     'Từ $65',
      'svc_page.c1.cta':       'Đặt lịch ngay',
      'svc_page.c2.tag':       'Chăm sóc lông',
      'svc_page.c2.name':      'Chải lông & Spa',
      'svc_page.c2.desc':      'Dịch vụ chải lông cao cấp dùng sản phẩm hữu cơ và kỹ thuật sức khỏe hiện đại.',
      'svc_page.c2.price':     'Từ $45',
      'svc_page.c2.cta':       'Đặt lịch ngay',
      'svc_page.c3.tag':       'Lưu trú',
      'svc_page.c3.name':      'Khách sạn Thú cưng',
      'svc_page.c3.desc':      'Lưu trú cao cấp thoải mái với sự quan tâm cá nhân và giám sát chăm sóc suốt ngày đêm.',
      'svc_page.c3.price':     'Từ $80',
      'svc_page.c3.cta':       'Đặt lịch ngay',
      'svc_page.c4.tag':       'Phòng ngừa',
      'svc_page.c4.name':      'Tiêm phòng',
      'svc_page.c4.desc':      'Lịch tiêm phòng phù hợp dựa trên độ tuổi, lối sống và tình trạng sức khỏe hiện tại của thú cưng.',
      'svc_page.c4.price':     'Từ $35',
      'svc_page.c4.cta':       'Đặt lịch ngay',
      'svc_page.c5.tag':       'Sức khỏe',
      'svc_page.c5.name':      'Gói Sức khỏe',
      'svc_page.c5.desc':      'Chương trình phòng ngừa tập trung vào sức khỏe lâu dài, cân bằng dinh dưỡng và hướng dẫn hoạt động.',
      'svc_page.c5.price':     'Từ $55',
      'svc_page.c5.cta':       'Đặt lịch ngay',
      'svc_page.c6.tag':       'Dinh dưỡng',
      'svc_page.c6.name':      'Tư vấn Dinh dưỡng',
      'svc_page.c6.desc':      'Kế hoạch chế độ ăn cá nhân hóa được phát triển bởi chuyên gia dinh dưỡng có chứng chỉ để tối ưu hóa sức khỏe.',
      'svc_page.c6.price':     'Từ $40',
      'svc_page.c6.cta':       'Đặt lịch ngay',
      'svc_page.w1.title':     'Chuyên gia Có chứng chỉ',
      'svc_page.w1.text':      'Mọi thành viên đội ngũ đều có chứng chỉ được công nhận và tận tâm với tiêu chuẩn chăm sóc thú cưng hiện đại.',
      'svc_page.w2.title':     'Hỗ trợ 24/7',
      'svc_page.w2.text':      'Chăm sóc và hỗ trợ suốt ngày đêm để thú cưng luôn trong bàn tay an toàn, chu đáo.',
      'svc_page.w3.title':     'Môi trường Bình yên',
      'svc_page.w3.text':      'Không gian được thiết kế chu đáo để giảm căng thẳng và tạo trải nghiệm bình yên cho mọi thú cưng.',
      'svc_page.w4.title':     'Sản phẩm Cao cấp',
      'svc_page.w4.text':      'Chỉ sử dụng các sản phẩm sức khỏe và chăm sóc lông được bác sĩ thú y phê duyệt và lựa chọn kỹ càng.',

      /* ── ABOUT PAGE — CARDS */
      'abt.story.p1':          'Năm 2018, một nhóm nhỏ bác sĩ thú y và những người đam mê sức khỏe thú cưng đã cùng nhau tại một phòng khám khiêm tốn với một mục tiêu: định nghĩa lại tiêu chuẩn chăm sóc thú cưng. Chúng tôi đã mệt mỏi với môi trường lạnh lẽo, lâm sàng gây căng thẳng cho cả thú cưng và gia đình chúng.',
      'abt.story.p2':          'Chúng tôi muốn điều gì đó khác — không gian ấm áp, chăm sóc minh bạch, giao tiếp ưu tiên con người và phương pháp điều trị dựa trên khoa học sức khỏe mới nhất. Ý tưởng đó phát triển thành Petcare Spa.',
      'abt.story.p3':          'Hôm nay chúng tôi phục vụ hàng nghìn thú cưng và gia đình trên khắp thành phố, nhưng trái tim của những gì chúng tôi làm chưa bao giờ thay đổi. Mỗi lần thăm khám nên cảm thấy như trở về nhà.',
      'abt.v1.title':          'Lòng trắc ẩn',
      'abt.v1.text':           'Mọi con vật bước qua cửa chúng tôi đều được đối xử với sự tử tế chân thật. Chúng tôi lắng nghe, quan sát và thích nghi chăm sóc cho từng nhu cầu cá nhân của thú cưng.',
      'abt.v2.title':          'Tin tưởng',
      'abt.v2.text':           'Chúng tôi tin rằng các gia đình thú cưng xứng đáng với sự minh bạch hoàn toàn. Từ chẩn đoán đến giá cả, chúng tôi giao tiếp trung thực và không bao giờ khuyến nghị những gì không cần thiết.',
      'abt.v3.title':          'Chăm sóc Hiện đại',
      'abt.v3.text':           'Chúng tôi đầu tư liên tục vào các kỹ thuật, thiết bị và đào tạo mới nhất. Đội ngũ của chúng tôi luôn đứng đầu trong khoa học thú y và sức khỏe.',
      'abt.v4.title':          'Ưu tiên Sức khỏe',
      'abt.v4.text':           'Phòng bệnh quan trọng hơn điều trị. Cách tiếp cận của chúng tôi ưu tiên sức khỏe lâu dài, dinh dưỡng cân bằng và lập kế hoạch sức khỏe chủ động cho mọi giai đoạn sống.',
      'abt.t1.role':           'Bác sĩ Thú y Trưởng',
      'abt.t1.bio':            '15 năm kinh nghiệm lâm sàng tập trung vào y học phòng ngừa và sức khỏe nội khoa. Được chứng nhận bởi AVMA.',
      'abt.t2.role':           'Trưởng phòng Chải lông',
      'abt.t2.bio':            'Thợ chải lông đoạt giải với chuyên môn chăm sóc theo giống, điều trị giảm dị ứng và xử lý không căng thẳng.',
      'abt.t3.role':           'Điều phối viên Sức khỏe',
      'abt.t3.bio':            'Chuyên gia hành vi thú cưng và lập kế hoạch sức khỏe toàn diện. Thiết kế chương trình sức khỏe dài hạn cá nhân hóa cho mọi thú cưng.',
      'abt.t4.role':           'Chuyên gia Dinh dưỡng',
      'abt.t4.bio':            'Chuyên gia dinh dưỡng thú y có chứng chỉ với chuyên môn sâu về chế độ ăn trị liệu, quản lý cân nặng và sức khỏe chuyển hóa.',
      'abt.cta.headline':      'Sẵn sàng mang đến điều tốt nhất cho thú cưng <em>của bạn?</em>',
      'abt.cta.sub':           'Đặt lịch thăm khám hoặc khám phá đầy đủ các dịch vụ của chúng tôi. Chúng tôi rất mong gặp thú cưng của bạn.',
      'abt.cta.btn1':          'Đặt lịch thăm khám',
      'abt.cta.btn2':          'Khám phá dịch vụ',
    }
  };

  /* ── APPLY FUNCTION ─────────────────────────── */
  function apply(lang) {
    const t = T[lang] || T.EN;

    /* data-i18n → textContent */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    /* data-i18n-html → innerHTML */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    /* data-i18n-placeholder → placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    /* ── NAVBAR (no data-i18n needed in HTML) ── */
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

    /* ── FOOTER (no data-i18n needed in HTML) ── */
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

    /* ── HTML lang attribute ── */
    document.documentElement.lang = lang === 'VI' ? 'vi' : 'en';
  }

  /* ── INIT ─────────────────────────────────── */
  window.PCS = window.PCS || {};
  window.PCS.i18n = { apply, translations: T };

  /* Apply saved language on page load */
  const saved = localStorage.getItem('pcs_lang') || 'EN';
  document.addEventListener('DOMContentLoaded', () => apply(saved));
})();
