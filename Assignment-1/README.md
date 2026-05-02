১. TypeScript-এ interface এবং type এর পার্থক্য:

TypeScript-এ interface এবং type—দুটোই ডেটার গঠন নির্ধারণ করতে ব্যবহৃত হয়, তবে তাদের ব্যবহারে কিছু মৌলিক পার্থক্য রয়েছে।

Interface :
1. সাধারণত object-এর কাঠামো নির্ধারণের জন্য ব্যবহার করা হয়
2. সহজভাবে inherit (extend) করা যায়
3. একই নাম একাধিকবার declare করলে সেগুলো automatic merge হয়ে যায়

Type :
1. শুধু object নয়, বরং union, primitive, tuple ইত্যাদিও define করা যায়
2. একই নাম পুনরায় declare করলে error দেখায় (merge হয় না)
3. জটিল (complex) type তৈরি করার ক্ষেত্রে বেশি flexible


২. TypeScript-এ any, unknown, এবং never এর পার্থক্য:

TypeScript-এ any, unknown, এবং never—এই তিনটি type বিশেষ পরিস্থিতিতে ব্যবহার করা হয়, কিন্তু তাদের কাজ ও আচরণ একে অপরের থেকে আলাদা।

any type :
1. any মানে হলো “যেকোনো type”—এতে TypeScript কোনো type checking করে না
2. এটি ব্যবহার করলে TypeScript-এর সুবিধা (type safety) প্রায় হারিয়ে যায়
3. ভুল কোডও detect করতে পারে না

unknown type :
1. unknown হলো safer version of any
2. যেকোনো value রাখা যায়, কিন্তু ব্যবহার করার আগে type check করতে হয়

never type :
1. never এমন type যা কখনো কোনো value return করে না
2. সাধারণত error throw করা বা infinite loop-এ ব্যবহার হয়