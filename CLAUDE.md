# Lior Studio — אתר התדמית

אתר סטטי (HTML + CSS בלבד, בלי build ובלי dependencies) שמראה שLior Studio הוא עסק אמיתי.
מטרה עיקרית: אימות חשבון מפתח מקצועי (Organization) ב-Google Play.

**האתר הזה אינו קשור לפרויקט Piki.** התיקייה עצמאית ונועדה לעבור לריפוזיטורי ציבורי משלה
(`liorstudio`, אירוח ב-GitHub Pages). אסור לייבא ממנה או אליה קוד של Piki.

## פרטי העסק
- דומיין: `liorsstudio.com` (שים לב: שתי s ב-liorsstudio, שונה משם הריפוזיטורי `liorstudio`). עדיין לא מקושר ל-GitHub Pages — יקושר בהמשך.
- אימייל ליצירת קשר: כרגע Gmail. אחרי חיבור הדומיין להחליף לכתובת בדומיין (למשל `contact@liorsstudio.com`) — גוגל מעדיפים אימייל בדומיין העסק.
- טלפון: 050-321-2017
- ריפוזיטורי: `kfirdelivery2020/liorstudio`, ענף `main`, אירוח GitHub Pages.

## אפליקציות של Lior Studio
- **CourierInfo** — https://github.com/kfirdelivery2020/courierinfo-privacy (מדיניות פרטיות קיימת)
- **CourierFinance** — https://github.com/kfirdelivery2020/courierfinance-privacy (מדיניות פרטיות קיימת)
- **K Delivery**
- **Alertly** — קוראת התראות מהמכשיר (NotificationListenerService), חייבת סעיף מפורש בפרטיות
- **Piki** — בפיתוח, "בקרוב" בלבד

## מבנה
- כל דף קיים פעמיים: בעברית בשורש ובאנגלית ב-`en/` (אותו שם קובץ). שינוי בדף אחד דורש התאמה בשני.
- `index.html` — דף בית: כותרת וכרטיסי האפליקציות
- `about.html`, `contact.html` — אודות ויצירת קשר (פרטי בעל העסק ב-contact, לא בדף הבית)
- `courierinfo.html`, `courierfinance.html`, `alertly.html`, `kdelivery.html` — דף מוצר לכל אפליקציה
- `privacy.html`, `terms.html`, `*-privacy.html`, `courierfinance-delete-account.html` — מסמכים משפטיים
- `assets/style.css` — כל העיצוב, משתני צבע בראש הקובץ. בכל שינוי בו מעלים את `?v=` בקישור ב-HTML (מטמון)
- `assets/menu.js` — תפריט המבורגר וצל סרגל; `assets/theme.js` — מצב כהה; `assets/shots.js` — צילומי מסך מ-`assets/screens/` (מופיעים רק אם יש קבצים)
- `assets/favicon.svg`, `assets/og.png` — מותג זמני עד שיגיע לוגו מעוצב
- `.nojekyll` — GitHub Pages מגיש כמו שהוא

## כללים
- אנגלית היא שפת האתר (גוגל בודקים באנגלית). אפשר להוסיף עברית בהמשך בדפים נפרדים.
- אין נתונים שאינם אמיתיים: כתובת, אימייל, שם רשום ו-D-U-N-S חייבים להתאים בדיוק
  למה שמוגש לגוגל. מקומות שממתינים למידע מסומנים `TODO:` בקבצים.
- אין קבצי מפתחות, אין טפסים שאוספים מידע, אין סקריפטים חיצוניים ואין אנליטיקס.
- דומיין וכתובת אימייל עסקית (לא Gmail) נדרשים לפני הגשה לגוגל.
