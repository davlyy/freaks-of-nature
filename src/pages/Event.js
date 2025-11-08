import React, { Fragment, useEffect, useRef, useState, useCallback } from "react";
import "./event.css";
import Cta from "../components/cta";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ticketicon from "../assets/ticketicon.svg";
import removeIcon from "../assets/remove.png";
import { useLocation } from "react-router-dom";

const BASE_PERKS = [
  "Access to all stages",
  "Entertainment Zone",
  "Art exhibition",
];

const BASE_INCLUDES = ["Feature", "Feature", "Feature", "Feature"];

const WEEKEND_OPTIONS = [
  {
    idSuffix: "weekend1",
    label: "Weekend 1",
    dayLabel: "Thursday",
    dateLabel: "Jan 30",
  },
  {
    idSuffix: "weekend2",
    label: "Weekend 2",
    dayLabel: "Friday",
    dateLabel: "Jan 31",
  },
];

const DAY_OPTIONS = [
  {
    idSuffix: "day1",
    label: "Day 1",
    dayLabel: "Thursday",
    dateLabel: "Jan 30",
  },
  { idSuffix: "day2", label: "Day 2", dayLabel: "Friday", dateLabel: "Jan 31" },
];

const buildOptions = (prefix, sourceOptions) =>
  sourceOptions.map((option) => ({
    id: `${prefix}-${option.idSuffix}`,
    label: option.label,
    dayLabel: option.dayLabel,
    dateLabel: option.dateLabel,
    summaryLabel: `${option.label} • ${option.dayLabel} ${option.dateLabel}`,
    price: option.price,
  }));

const TICKET_TABS = [
  {
    id: "tab1",
    label: "Multi-day Pass",
    tickets: [
      {
        key: "multi-general",
        title: "General Admission",
        price: 250,
        compareAt: 299,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("multi-general", WEEKEND_OPTIONS),
      },
      {
        key: "multi-golden",
        title: "Golden Circle",
        price: 420,
        compareAt: 499,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("multi-golden", WEEKEND_OPTIONS),
      },
      {
        key: "multi-vip",
        title: "VIP",
        price: 690,
        compareAt: 759,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("multi-vip", WEEKEND_OPTIONS),
      },
      {
        key: "multi-tables",
        title: "Tables",
        price: 1850,
        compareAt: 1990,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("multi-tables", WEEKEND_OPTIONS),
      },
      {
        key: "multi-boxes",
        title: "Boxes",
        price: 2350,
        compareAt: 2490,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("multi-boxes", WEEKEND_OPTIONS),
      },
    ],
  },
  {
    id: "tab2",
    label: "Day Pass",
    tickets: [
      {
        key: "day-general",
        title: "General Admission",
        price: 180,
        compareAt: 210,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("day-general", DAY_OPTIONS),
      },
      {
        key: "day-golden",
        title: "Golden Circle",
        price: 320,
        compareAt: 360,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("day-golden", DAY_OPTIONS),
      },
      {
        key: "day-vip",
        title: "VIP",
        price: 520,
        compareAt: 580,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("day-vip", DAY_OPTIONS),
      },
      {
        key: "day-tables",
        title: "Tables",
        price: 950,
        compareAt: 1020,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("day-tables", DAY_OPTIONS),
      },
      {
        key: "day-boxes",
        title: "Boxes",
        price: 1200,
        compareAt: 1320,
        perks: BASE_PERKS,
        includes: BASE_INCLUDES,
        options: buildOptions("day-boxes", DAY_OPTIONS),
      },
    ],
  },
];

const TICKET_OPTIONS = TICKET_TABS.flatMap((tab) =>
  tab.tickets.flatMap((ticket) =>
    ticket.options.map((option) => ({
      ...option,
      ticketKey: ticket.key,
      ticketTitle: ticket.title,
      ticketPrice: option.price ?? ticket.price,
      ticketCompareAt: ticket.compareAt,
      tabId: tab.id,
      tabLabel: tab.label,
    }))
  )
);

const INITIAL_COUNTS = TICKET_OPTIONS.reduce((acc, option) => {
  acc[option.id] = 0;
  return acc;
}, {});

const roundToTwo = (value) => Math.round(value * 100) / 100;

const formatCurrency = (value) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatSar = (value) => `${formatCurrency(value)} SAR`;

const FAQ_ITEMS = [
  {
    id: "faq-what-is",
    question: "What is Freaks of Nature?",
    answer: "Details about Freaks of Nature...",
  },
  {
    id: "faq-hours",
    question: "What are the opening hours each day?",
    answer:
      "Plan your ideal schedule, share top artists with friends, and explore amazing food and entertainment. This app has everything you need!",
  },
  {
    id: "faq-age",
    question: "What is the minimum age?",
    answer: "Details about Freaks of Nature...",
  },
  {
    id: "faq-food",
    question: "What Food & Beverages options will be available?",
    answer: "Details about Freaks of Nature...",
  },
  {
    id: "faq-policy",
    question: "What is the anti-harassment policy?",
    answer: "Details about Freaks of Nature...",
  },
];

// function Event() {
//     const [activeTab, setActiveTab] = useState(TICKET_TABS[0].id);
//     const [activeTicket, setActiveTicket] = useState(null);
//     const [counts, setCounts] = useState(() => ({ ...INITIAL_COUNTS }));
//     const [isStickyOpen, setIsStickyOpen] = useState(false);
//     const [activeFaq, setActiveFaq] = useState(null);
//     const location = useLocation();
//     const pendingHashRef = useRef(null);

//     const activeTabData =
//         TICKET_TABS.find((tab) => tab.id === activeTab) ?? TICKET_TABS[0];

//     const selectedOptions = TICKET_OPTIONS.filter(
//         (option) => (counts[option.id] ?? 0) > 0
//     ).map((option) => {
//         const count = counts[option.id] ?? 0;
//         return {
//             ...option,
//             count,
//             totalPrice: roundToTwo(count * option.ticketPrice),
//         };
//     });

//     const subtotal = roundToTwo(
//         selectedOptions.reduce((sum, item) => sum + item.totalPrice, 0)
//     );
//     const discount = subtotal ? roundToTwo(subtotal * 0.1) : 0;
//     const subtotalAfterDiscount = subtotal ? roundToTwo(subtotal - discount) : 0;
//     const fees = subtotal ? roundToTwo(subtotalAfterDiscount * 0.06) : 0;
//     const totalDue = subtotal ? roundToTwo(subtotalAfterDiscount + fees) : 0;
//     const totalQuantity = selectedOptions.reduce(
//         (sum, item) => sum + item.count,
//         0
//     );
//     const hasSelections = selectedOptions.length > 0;
//     const discountLabel = discount > 0 ? `-${formatSar(discount)}` : formatSar(0);

//     const handleTabClick = (tabId) => {
//         setActiveTab(tabId);
//         setActiveTicket(null);
//     };

//     const toggleTicketAccordion = (ticketKey) => {
//         setActiveTicket((prev) => (prev === ticketKey ? null : ticketKey));
//     };

//     const handleIncrement = (optionId) => {
//         setCounts((prev) => ({
//             ...prev,
//             [optionId]: (prev[optionId] ?? 0) + 1,
//         }));
//     };

//     const handleDecrement = (optionId) => {
//         setCounts((prev) => {
//             const current = prev[optionId] ?? 0;
//             if (current <= 0) {
//                 return prev;
//             }
//             return {
//                 ...prev,
//                 [optionId]: current - 1,
//             };
//         });
//     };

//     const handleRemoveItem = (optionId) => {
//         setCounts((prev) => {
//             if (!prev[optionId]) {
//                 return prev;
//             }
//             return {
//                 ...prev,
//                 [optionId]: 0,
//             };
//         });
//     };

//     const handleClearAll = () => {
//         if (!hasSelections) {
//             return;
//         }
//         setCounts(() => ({ ...INITIAL_COUNTS }));
//     };

//     const toggleStickyOrder = () => {
//         setIsStickyOpen((prev) => !prev);
//     };

//     const toggleFaqAccordion = (faqId) => {
//         setActiveFaq((prev) => (prev === faqId ? null : faqId));
//     };

//     useEffect(() => {
//         if (!location.hash) {
//             return;
//         }

//         const hashValue = location.hash.replace('#', '');
//         if (!hashValue) {
//             return;
//         }

//         const normalizedHash = hashValue.toLowerCase();

//         if (normalizedHash === 'day-pass') {
//             setActiveTab('tab2');
//         } else if (
//             normalizedHash === 'multi-day-pass' ||
//             normalizedHash === 'weekly-pass' ||
//             normalizedHash === 'tickets'
//         ) {
//             setActiveTab('tab1');
//         }

//         pendingHashRef.current = hashValue;
//     }, [location.hash]);

//     useEffect(() => {
//         if (!pendingHashRef.current) {
//             return;
//         }

//         const scrollTarget = pendingHashRef.current;
//         const element = document.getElementById(scrollTarget);
//         console.log('Scrolling to element:', pendingHashRef.current, element);

//         if (element) {
//             // Responsive offset based on screen size
//             let offset;
//             if (window.innerWidth <= 768) {
//                 offset = 120; // Mobile
//             } else if (window.innerWidth <= 1440) {
//                 offset = 180; // Laptop
//             } else {
//                 offset = 220; // Large monitor
//             }

//             const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//             pendingHashRef.current = null;
//         } else {
//             const timeoutId = window.setTimeout(() => {
//                 const retryElement = document.getElementById(scrollTarget);
//                 if (retryElement) {
//                     // Responsive offset based on screen size
//                     let offset;
//                     if (window.innerWidth <= 768) {
//                         offset = 120; // Mobile
//                     } else if (window.innerWidth <= 1440) {
//                         offset = 180; // Laptop
//                     } else {
//                         offset = 220; // Large monitor
//                     }

//                     const elementPosition = retryElement.getBoundingClientRect().top + window.pageYOffset;
//                     const offsetPosition = elementPosition - offset;

//                     window.scrollTo({
//                         top: offsetPosition,
//                         behavior: 'smooth'
//                     });
//                 }
//                 pendingHashRef.current = null;
//             }, 150);

//             return () => window.clearTimeout(timeoutId);
//         }

//         return undefined;
//     }, [activeTab]);

//     return (
//         <div>
//             <section className='hero-event'> </section>

//             <section className='event-section' id='tickets'>
//                 <div className='event-div'>
//                     <div className='event-tabs'>
//                         <div className='tabs'>
//                             {TICKET_TABS.map((tab) => (
//                                 <button
//                                     key={tab.id}
//                                     className={activeTab === tab.id ? 'tab active' : 'tab'}
//                                     onClick={() => handleTabClick(tab.id)}
//                                 >
//                                     {tab.label}
//                                 </button>
//                             ))}
//                         </div>

//                         <div
//                             className='tab-content'
//                             id={activeTab === 'tab1' ? 'multi-day-pass' : 'day-pass'}
//                         >
//                             {activeTabData.tickets.map((ticket) => {
//                                 const accordionKey = `${activeTabData.id}-${ticket.key}`;
//                                 const isActive = activeTicket === accordionKey;
//                                 return (
//                                     <div
//                                         key={ticket.key}
//                                         className={`accordin-item ${isActive ? 'active' : ''}`}
//                                     >
//                                         <div
//                                             className='accordin-header'
//                                             onClick={() => toggleTicketAccordion(accordionKey)}
//                                         >
//                                             <div className='accordin-main-title'>
//                                                 <h3>{ticket.title}</h3>
//                                                 <h4>
//                                                     SAR {formatCurrency(ticket.price)}
//                                                     {ticket.compareAt && (
//                                                         <>
//                                                             {' '}
//                                                             <span className='line-through'>
//                                                                 SAR {formatCurrency(ticket.compareAt)}
//                                                             </span>
//                                                         </>
//                                                     )}
//                                                 </h4>
//                                             </div>
//                                             <span className={`arrow ${isActive ? 'rotate' : ''}`}>
//                                                 <FaChevronDown className='arrow-icon-down' />
//                                             </span>
//                                         </div>
//                                         {isActive && (
//                                             <div className='accordin-content'>
//                                                 <div className='accordin-content-div'>
//                                                     <div className='content-text'>
//                                                         <h3>
//                                                             {ticket.perks.map((perk, index) => (
//                                                                 <Fragment key={perk}>
//                                                                     {perk}
//                                                                     {index < ticket.perks.length - 1 && <br />}
//                                                                 </Fragment>
//                                                             ))}
//                                                         </h3>
//                                                     </div>
//                                                     <div className='content-ticket'>
//                                                         <h4>Ticket include:</h4>
//                                                         <div className='ticket-list'>
//                                                             {ticket.includes.map((include) => (
//                                                                 <p key={include}>{include}</p>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className='accordin-content-div1'>
//                                                     {ticket.options.map((option) => {
//                                                         const optionCount = counts[option.id] ?? 0;
//                                                         return (
//                                                             <div className='weekend-div' key={option.id}>
//                                                                 <h3>{option.label}</h3>
//                                                                 {optionCount > 0 ? (
//                                                                     <div className='plusminus-function'>
//                                                                         <div className='function-text'>
//                                                                             {option.dayLabel}{' '}
//                                                                             <span>{option.dateLabel}</span>
//                                                                         </div>
//                                                                         <div className='function-plusminus'>
//                                                                             <div
//                                                                                 className='plusminus1 plus'
//                                                                                 onClick={() =>
//                                                                                     handleIncrement(option.id)
//                                                                                 }
//                                                                                 role='button'
//                                                                             >
//                                                                                 +
//                                                                             </div>
//                                                                             <div className='plusminus1 number'>
//                                                                                 {optionCount}
//                                                                             </div>
//                                                                             <div
//                                                                                 className='plusminus1 minus'
//                                                                                 onClick={() =>
//                                                                                     handleDecrement(option.id)
//                                                                                 }
//                                                                                 role='button'
//                                                                             >
//                                                                                 -
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 ) : (
//                                                                     <div
//                                                                         className='add-function'
//                                                                         onClick={() => handleIncrement(option.id)}
//                                                                         role='button'
//                                                                     >
//                                                                         <div className='function-text'>
//                                                                             {option.dayLabel}{' '}
//                                                                             <span>{option.dateLabel}</span>
//                                                                         </div>
//                                                                         <div className='add-cta'>+ Add</div>
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     <div className='event-order'>
//                         <div className='event-order-div order-summary-card'>
//                             <div className='order-summary-header'>
//                                 <h4>ORDER SUMMARY</h4>
//                                 <button
//                                     type='button'
//                                     className='clear-button desktop'
//                                     onClick={handleClearAll}
//                                     disabled={!hasSelections}
//                                 >
//                                     Clear all
//                                 </button>
//                             </div>

//                             <div className='order-summary-body'>
//                                 {hasSelections ? (
//                                     selectedOptions.map((item) => (
//                                         <div className='order-summary-item' key={item.id}>
//                                             <div className='order-summary-copy'>
//                                                 <span className='order-summary-qty'>{item.count}x</span>
//                                                 <div>
//                                                     <p className='order-summary-title'>
//                                                         {item.ticketTitle}
//                                                     </p>
//                                                     <p className='order-summary-detail'>
//                                                         {item.summaryLabel}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className='order-summary-meta'>
//                                                 <span className='order-summary-price'>
//                                                     {formatSar(item.totalPrice)}
//                                                 </span>
//                                                 <button
//                                                     type='button'
//                                                     className='remove-button desktop'
//                                                     onClick={() => handleRemoveItem(item.id)}
//                                                     aria-label={`Remove ${item.ticketTitle}`}
//                                                 >
//                                                     <img src={removeIcon} alt='Remove item' />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p className='order-summary-empty'>
//                                         Select tickets to see them appear here.
//                                     </p>
//                                 )}
//                             </div>

//                             <div className='order-summary-totals'>
//                                 <p>
//                                     <span>Total</span>
//                                     <span>{formatSar(subtotal)}</span>
//                                 </p>
//                                 <p>
//                                     <span>Discount (10%)</span>
//                                     <span>{discountLabel}</span>
//                                 </p>
//                                 <p>
//                                     <span>Ticketing fees (6%)</span>
//                                     <span>{formatSar(fees)}</span>
//                                 </p>
//                                 <p className='order-summary-total-due'>
//                                     <span>Total Amount Due</span>
//                                     <span>{formatSar(totalDue)}</span>
//                                 </p>
//                             </div>

//                             <button
//                                 type='button'
//                                 className='total-button'
//                                 disabled={!hasSelections}
//                             >
//                                 CONFIRM
//                             </button>

//                             <p className='order-summary-note'>
//                                 *All Tickets are nonrefundable *Name in the ticket must match
//                                 name in tawaklna * Full Ticket T&C <span>HERE</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Cta />

//             <section className='FAQs-section' id='faq'>
//                 <div className='FAQs-div'>
//                     <h2>FAQs</h2>

//                     <div className='FAQs-accordion'>
//                         {FAQ_ITEMS.map((faq) => {
//                             const isActive = activeFaq === faq.id;
//                             return (
//                                 <div className='FAQs-accordion-item' key={faq.id}>
//                                     <div
//                                         className='FAQs-accordion-header'
//                                         onClick={() => toggleFaqAccordion(faq.id)}
//                                     >
//                                         <span className='plusminus'>{isActive ? '-' : '+'}</span>
//                                         <span>{faq.question}</span>
//                                     </div>
//                                     {isActive && (
//                                         <div className='FAQs-accordion-content'>
//                                             <p>{faq.answer}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             <section className={`sticky-order ${isStickyOpen ? 'open' : ''}`}>
//                 <div
//                     className={`sticky-arrow ${isStickyOpen ? 'down' : ''}`}
//                     onClick={toggleStickyOrder}
//                 >
//                     <FaChevronUp className='rotate-arrow' />
//                 </div>

//                 {isStickyOpen ? (
//                     <div className='sticky-order-summary'>
//                         <div className='summary'>
//                             <div className='box-summary1'>
//                                 <span className='summary-clear-cta'>
//                                     <h4>Summary Order</h4>
//                                     <button
//                                         type='button'
//                                         className='clear-button'
//                                         onClick={handleClearAll}
//                                         disabled={!hasSelections}
//                                     >
//                                         clear all
//                                     </button>
//                                 </span>

//                                 <div className='summary-items'>
//                                     {hasSelections ? (
//                                         selectedOptions.map((item) => (
//                                             <div className='s-box-card' key={item.id}>
//                                                 <div className='s-card-text'>
//                                                     <div className='s-card-copy'>
//                                                         <p className='s-card-title'>
//                                                             <span>{item.count}x</span> {item.ticketTitle}
//                                                         </p>
//                                                         <p className='s-card-detail'>
//                                                             {item.summaryLabel}
//                                                         </p>
//                                                     </div>
//                                                     <div className='s-card-meta'>
//                                                         <span className='s-card-price'>
//                                                             {formatSar(item.totalPrice)}
//                                                         </span>
//                                                         <button
//                                                             type='button'
//                                                             className='remove-button'
//                                                             onClick={() => handleRemoveItem(item.id)}
//                                                             aria-label={`Remove ${item.ticketTitle}`}
//                                                         >
//                                                             <img src={removeIcon} alt='Remove item' />
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <p className='order-summary-empty'>Your order is empty.</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className='box-summary2'>
//                                 <div className='total-summary'>
//                                     <p>
//                                         Total <span>{formatSar(subtotal)}</span>
//                                     </p>
//                                     <p>
//                                         Discount (10%) <span>{discountLabel}</span>
//                                     </p>
//                                     <p>
//                                         Ticketing fees (6%) <span>{formatSar(fees)}</span>
//                                     </p>
//                                     <p>
//                                         Total Amount Due <span>{formatSar(totalDue)}</span>
//                                     </p>
//                                 </div>
//                                 <div className='final-total'>
//                                     <p>
//                                         Total: <span>{formatSar(totalDue)}</span>
//                                     </p>
//                                 </div>

//                                 <button
//                                     type='button'
//                                     className='total-button'
//                                     disabled={!hasSelections}
//                                 >
//                                     CONFIRM
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className='sticky-order-content'>
//                         <div className='ticket-icon'>
//                             <p>
//                                 <img
//                                     src={ticketicon}
//                                     alt='Freaks of Nature'
//                                     className='img-fluid'
//                                 />{' '}
//                                 x{totalQuantity}
//                             </p>
//                             <h4>Total: {formatSar(totalDue)}</h4>
//                         </div>

//                         <button
//                             type='button'
//                             className='confirm-button'
//                             disabled={!hasSelections}
//                         >
//                             CONFIRM
//                         </button>
//                     </div>
//                 )}
//             </section>
//         </div>
//     );
// }

function Event() {
  const [activeTab, setActiveTab] = useState(TICKET_TABS[0].id);
  const [activeTicket, setActiveTicket] = useState(null);
  const [counts, setCounts] = useState(() => ({ ...INITIAL_COUNTS }));
  const [isStickyOpen, setIsStickyOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const location = useLocation();
  const pendingHashRef = useRef(null);

  const activeTabData =
    TICKET_TABS.find((tab) => tab.id === activeTab) ?? TICKET_TABS[0];

  const selectedOptions = TICKET_OPTIONS.filter(
    (option) => (counts[option.id] ?? 0) > 0
  ).map((option) => {
    const count = counts[option.id] ?? 0;
    return {
      ...option,
      count,
      totalPrice: roundToTwo(count * option.ticketPrice),
    };
  });

  const subtotal = roundToTwo(
    selectedOptions.reduce((sum, item) => sum + item.totalPrice, 0)
  );
  const discount = subtotal ? roundToTwo(subtotal * 0.1) : 0;
  const subtotalAfterDiscount = subtotal ? roundToTwo(subtotal - discount) : 0;
  const fees = subtotal ? roundToTwo(subtotalAfterDiscount * 0.06) : 0;
  const totalDue = subtotal ? roundToTwo(subtotalAfterDiscount + fees) : 0;
  const totalQuantity = selectedOptions.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const hasSelections = selectedOptions.length > 0;
  const discountLabel = discount > 0 ? `-${formatSar(discount)}` : formatSar(0);

  // Helper function to scroll to element centered in viewport
  const scrollToElement = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
      return false;
    }

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Get fresh element reference in case DOM updated
        const freshElement = document.getElementById(elementId);
        if (!freshElement) return;

        // Get element position and dimensions
        const elementRect = freshElement.getBoundingClientRect();
        // Get absolute position from top of document
        const absoluteTop = elementRect.top + window.scrollY;
        const elementHeight = elementRect.height;

        // Calculate viewport height
        const viewportHeight = window.innerHeight;

        // Calculate position to center element in viewport
        // Position = element's top - (viewport height / 2) + (element height / 2)
        const centerPosition = absoluteTop - (viewportHeight / 2) + (elementHeight / 2);

        // Header offset based on screen size (accounting for countdown banner on mobile)
        // Desktop: 124px header
        // Mobile (≤880px): 124px header + countdown banner offset (54px) = 178px total
        // Extra small (≤468px): 124px header + countdown banner offset (40px) = 164px total
        const getHeaderOffset = () => {
          const width = window.innerWidth;
          if (width <= 468) {
            return 164; // 124px header + 40px banner offset
          } else if (width <= 880) {
            return 178; // 124px header + 54px banner offset
          } else {
            return 124; // Just header height on desktop
          }
        };
        const headerOffset = getHeaderOffset();
        const scrollPosition = Math.max(0, centerPosition - headerOffset);

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      });
    });

    return true;
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveTicket(null);
  };

  const toggleTicketAccordion = (ticketKey) => {
    setActiveTicket((prev) => (prev === ticketKey ? null : ticketKey));
  };

  const handleIncrement = (optionId) => {
    setCounts((prev) => ({
      ...prev,
      [optionId]: (prev[optionId] ?? 0) + 1,
    }));
  };

  const handleDecrement = (optionId) => {
    setCounts((prev) => {
      const current = prev[optionId] ?? 0;
      if (current <= 0) {
        return prev;
      }
      return {
        ...prev,
        [optionId]: current - 1,
      };
    });
  };

  const handleRemoveItem = (optionId) => {
    setCounts((prev) => {
      if (!prev[optionId]) {
        return prev;
      }
      return {
        ...prev,
        [optionId]: 0,
      };
    });
  };

  const handleClearAll = () => {
    if (!hasSelections) {
      return;
    }
    setCounts(() => ({ ...INITIAL_COUNTS }));
  };

  const toggleStickyOrder = () => {
    setIsStickyOpen((prev) => !prev);
  };

  const toggleFaqAccordion = (faqId) => {
    setActiveFaq((prev) => (prev === faqId ? null : faqId));
  };

  // Handle hash changes from location
  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const hashValue = location.hash.replace("#", "");
    if (!hashValue) {
      return;
    }

    const normalizedHash = hashValue.toLowerCase();

    // Set the appropriate tab based on the hash
    if (normalizedHash === "day-pass") {
      setActiveTab("tab2");
      pendingHashRef.current = "day-pass";
    } else if (
      normalizedHash === "multi-day-pass" ||
      normalizedHash === "weekly-pass"
    ) {
      setActiveTab("tab1");
      pendingHashRef.current = "multi-day-pass";
    } else if (normalizedHash === "tickets") {
      setActiveTab("tab1");
      pendingHashRef.current = "tickets";
    } else if (normalizedHash === "dj-comp" || normalizedHash === "affiliate") {
      pendingHashRef.current = "djcomp";
    } else if (normalizedHash === "faq") {
      pendingHashRef.current = "faq";
    } else {
      pendingHashRef.current = hashValue;
    }
  }, [location.hash]);

  // Listen for native hashchange events (for when clicking links on same page)
  useEffect(() => {
    const handleHashChange = () => {
      const hashValue = window.location.hash.replace("#", "");
      if (!hashValue) {
        return;
      }

      const normalizedHash = hashValue.toLowerCase();

      // Set the appropriate tab based on the hash
      if (normalizedHash === "day-pass") {
        setActiveTab("tab2");
        pendingHashRef.current = "day-pass";
      } else if (
        normalizedHash === "multi-day-pass" ||
        normalizedHash === "weekly-pass"
      ) {
        setActiveTab("tab1");
        pendingHashRef.current = "multi-day-pass";
      } else if (normalizedHash === "tickets") {
        setActiveTab("tab1");
        pendingHashRef.current = "tickets";
      } else if (normalizedHash === "dj-comp" || normalizedHash === "affiliate") {
        pendingHashRef.current = "djcomp";
      } else if (normalizedHash === "faq") {
        pendingHashRef.current = "faq";
      } else {
        pendingHashRef.current = hashValue;
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!pendingHashRef.current) {
      return;
    }

    const scrollTarget = pendingHashRef.current;

    // Clear the pending ref immediately to prevent duplicate scrolls
    pendingHashRef.current = null;

    // Always use a delay to ensure tab switching and DOM updates are complete
    const timeoutId = window.setTimeout(() => {
      scrollToElement(scrollTarget);
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [activeTab, scrollToElement]);

  return (
    <div>
      <section className="hero-event"> </section>

      <section className="event-section" id="tickets">
        <div className="event-div">
          <div className="event-tabs">
            <div className="tabs">
              {TICKET_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={activeTab === tab.id ? "tab active" : "tab"}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              className="tab-content"
              id={activeTab === "tab1" ? "multi-day-pass" : "day-pass"}
            >
              {activeTabData.tickets.map((ticket) => {
                const accordionKey = `${activeTabData.id}-${ticket.key}`;
                const isActive = activeTicket === accordionKey;
                return (
                  <div
                    key={ticket.key}
                    className={`accordin-item ${isActive ? "active" : ""}`}
                  >
                    <div
                      className="accordin-header"
                      onClick={() => toggleTicketAccordion(accordionKey)}
                    >
                      <div className="accordin-main-title">
                        <h3>{ticket.title}</h3>
                        <h4>
                          SAR {formatCurrency(ticket.price)}
                          {ticket.compareAt && (
                            <>
                              {" "}
                              <span className="line-through">
                                SAR {formatCurrency(ticket.compareAt)}
                              </span>
                            </>
                          )}
                        </h4>
                      </div>
                      <span className={`arrow ${isActive ? "rotate" : ""}`}>
                        <FaChevronDown className="arrow-icon-down" />
                      </span>
                    </div>
                    {isActive && (
                      <div className="accordin-content">
                        <div className="accordin-content-div">
                          <div className="content-text">
                            <h3>
                              {ticket.perks.map((perk, index) => (
                                <Fragment key={perk}>
                                  {perk}
                                  {index < ticket.perks.length - 1 && <br />}
                                </Fragment>
                              ))}
                            </h3>
                          </div>
                          <div className="content-ticket">
                            <h4>Ticket include:</h4>
                            <div className="ticket-list">
                              {ticket.includes.map((include) => (
                                <p key={include}>{include}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="accordin-content-div1">
                          {ticket.options.map((option) => {
                            const optionCount = counts[option.id] ?? 0;
                            return (
                              <div className="weekend-div" key={option.id}>
                                <h3>{option.label}</h3>
                                {optionCount > 0 ? (
                                  <div className="plusminus-function">
                                    <div className="function-text">
                                      {option.dayLabel}{" "}
                                      <span>{option.dateLabel}</span>
                                    </div>
                                    <div className="function-plusminus">
                                      <div
                                        className="plusminus1 plus"
                                        onClick={() =>
                                          handleIncrement(option.id)
                                        }
                                        role="button"
                                      >
                                        +
                                      </div>
                                      <div className="plusminus1 number">
                                        {optionCount}
                                      </div>
                                      <div
                                        className="plusminus1 minus"
                                        onClick={() =>
                                          handleDecrement(option.id)
                                        }
                                        role="button"
                                      >
                                        -
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="add-function"
                                    onClick={() => handleIncrement(option.id)}
                                    role="button"
                                  >
                                    <div className="function-text">
                                      {option.dayLabel}{" "}
                                      <span>{option.dateLabel}</span>
                                    </div>
                                    <div className="add-cta">+ Add</div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="event-order">
            <div className="event-order-div order-summary-card">
              <div className="order-summary-header">
                <h4>ORDER SUMMARY</h4>
                <button
                  type="button"
                  className="clear-button desktop"
                  onClick={handleClearAll}
                  disabled={!hasSelections}
                >
                  Clear all
                </button>
              </div>

              <div className="order-summary-body">
                {hasSelections ? (
                  selectedOptions.map((item) => (
                    <div className="order-summary-item" key={item.id}>
                      <div className="order-summary-copy">
                        <span className="order-summary-qty">{item.count}x</span>
                        <div>
                          <p className="order-summary-title">
                            {item.ticketTitle}
                          </p>
                          <p className="order-summary-detail">
                            {item.summaryLabel}
                          </p>
                        </div>
                      </div>
                      <div className="order-summary-meta">
                        <span className="order-summary-price">
                          {formatSar(item.totalPrice)}
                        </span>
                        <button
                          type="button"
                          className="remove-button desktop"
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label={`Remove ${item.ticketTitle}`}
                        >
                          <img src={removeIcon} alt="Remove item" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="order-summary-empty">
                    Select tickets to see them appear here.
                  </p>
                )}
              </div>

              <div className="order-summary-totals">
                <p>
                  <span>Total</span>
                  <span>{formatSar(subtotal)}</span>
                </p>
                <p>
                  <span>Discount (10%)</span>
                  <span>{discountLabel}</span>
                </p>
                <p>
                  <span>Ticketing fees (6%)</span>
                  <span>{formatSar(fees)}</span>
                </p>
                <p className="order-summary-total-due">
                  <span>Total Amount Due</span>
                  <span>{formatSar(totalDue)}</span>
                </p>
              </div>

              <button
                type="button"
                className="total-button"
                disabled={!hasSelections}
              >
                CONFIRM
              </button>

              <p className="order-summary-note">
                *All Tickets are nonrefundable *Name in the ticket must match
                name in tawaklna * Full Ticket T&C <span>HERE</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="djcomp">
        <Cta />
      </section>

      <section className="FAQs-section" id="faq">
        <div className="FAQs-div">
          <h2>FAQs</h2>

          <div className="FAQs-accordion">
            {FAQ_ITEMS.map((faq) => {
              const isActive = activeFaq === faq.id;
              return (
                <div className="FAQs-accordion-item" key={faq.id}>
                  <div
                    className="FAQs-accordion-header"
                    onClick={() => toggleFaqAccordion(faq.id)}
                  >
                    <span className="plusminus">{isActive ? "-" : "+"}</span>
                    <span>{faq.question}</span>
                  </div>
                  {isActive && (
                    <div className="FAQs-accordion-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`sticky-order ${isStickyOpen ? "open" : ""}`}>
        <div
          className={`sticky-arrow ${isStickyOpen ? "down" : ""}`}
          onClick={toggleStickyOrder}
        >
          <FaChevronUp className="rotate-arrow" />
        </div>

        {isStickyOpen ? (
          <div className="sticky-order-summary">
            <div className="summary">
              <div className="box-summary1">
                <span className="summary-clear-cta">
                  <h4>Summary Order</h4>
                  <button
                    type="button"
                    className="clear-button"
                    onClick={handleClearAll}
                    disabled={!hasSelections}
                  >
                    clear all
                  </button>
                </span>

                <div className="summary-items">
                  {hasSelections ? (
                    selectedOptions.map((item) => (
                      <div className="s-box-card" key={item.id}>
                        <div className="s-card-text">
                          <div className="s-card-copy">
                            <p className="s-card-title">
                              <span>{item.count}x</span> {item.ticketTitle}
                            </p>
                            <p className="s-card-detail">{item.summaryLabel}</p>
                          </div>
                          <div className="s-card-meta">
                            <span className="s-card-price">
                              {formatSar(item.totalPrice)}
                            </span>
                            <button
                              type="button"
                              className="remove-button"
                              onClick={() => handleRemoveItem(item.id)}
                              aria-label={`Remove ${item.ticketTitle}`}
                            >
                              <img src={removeIcon} alt="Remove item" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="order-summary-empty">Your order is empty.</p>
                  )}
                </div>
              </div>

              <div className="box-summary2">
                <div className="total-summary">
                  <p>
                    Total <span>{formatSar(subtotal)}</span>
                  </p>
                  <p>
                    Discount (10%) <span>{discountLabel}</span>
                  </p>
                  <p>
                    Ticketing fees (6%) <span>{formatSar(fees)}</span>
                  </p>
                  <p>
                    Total Amount Due <span>{formatSar(totalDue)}</span>
                  </p>
                </div>
                <div className="final-total">
                  <p>
                    Total: <span>{formatSar(totalDue)}</span>
                  </p>
                </div>

                <button
                  type="button"
                  className="total-button"
                  disabled={!hasSelections}
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="sticky-order-content">
            <div className="ticket-icon">
              <p>
                <img
                  src={ticketicon}
                  alt="Freaks of Nature"
                  className="img-fluid"
                />{" "}
                x{totalQuantity}
              </p>
              <h4>Total: {formatSar(totalDue)}</h4>
            </div>

            <button
              type="button"
              className="confirm-button"
              disabled={!hasSelections}
            >
              CONFIRM
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Event;
