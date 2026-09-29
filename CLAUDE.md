# Lior Studio — אתר התדמית

אתר סטטי (HTML + CSS בלבד, בלי build ובלי dependencies) שמראה שLior Studio הוא עסק אמיתי.
מטרה עיקרית: אימות חשבון מפתח מקצועי (Organization) ב-Google Play.

**האתר הזה אינו קשור לפרויקט Piki.** התיקייה עצמאית ונועדה לעבור לריפוזיטורי ציבורי משלה
(מתוכנן: `liorstudio`, אירוח ב-GitHub Pages). אסור לייבא ממנה או אליה קוד של Piki.

## אפליקציות של Lior Studio
- **CourierInfo** — https://github.com/kfirdelivery2020/courierinfo-privacy (מדיניות פרטיות קיימת)
- **CourierFinance** — https://github.com/kfirdelivery2020/courierfinance-privacy (מדיניות פרטיות קיימת)
- **K Delivery**
- **Alertly** — קוראת התראות מהמכשיר (NotificationListenerService), חייבת סעיף מפורש בפרטיות
- **Piki** — בפיתוח, "בקרוב" בלבד

## מבנה
- `index.html` — דף בית: מי אנחנו, אפליקציות, יצירת קשר
- `privacy.html`, `terms.html` — מסמכים כלליים של הסטודיו
- `assets/style.css` — כל העיצוב, משתני צבע בראש הקובץ
- `.nojekyll` — GitHub Pages מגיש כמו שהוא

## כללים
- אנגלית היא שפת האתר (גוגל בודקים באנגלית). אפשר להוסיף עברית בהמשך בדפים נפרדים.
- אין נתונים שאינם אמיתיים: כתובת, אימייל, שם רשום ו-D-U-N-S חייבים להתאים בדיוק
  למה שמוגש לגוגל. מקומות שממתינים למידע מסומנים `TODO:` בקבצים.
- אין קבצי מפתחות, אין טפסים שאוספים מידע, אין סקריפטים חיצוניים ואין אנליטיקס.
- דומיין וכתובת אימייל עסקית (לא Gmail) נדרשים לפני הגשה לגוגל.
