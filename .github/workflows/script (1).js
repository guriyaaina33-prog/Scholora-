/* ===================== DATA ===================== */
const SUBJECTS = [
  {code:'ENG', name:'English', desc:'Grammar, comprehension and essay writing for every grade.', detail:'Beginner: phonics and sentence building. Intermediate: comprehension and grammar. Advanced: essay writing and literature analysis.'},
  {code:'CS', name:'Computer Science', desc:'Programming logic, from first script to exam-ready theory.', detail:'Beginner: computer basics and logic. Intermediate: programming fundamentals (Python/C++). Advanced: data structures and past-paper practice.'},
  {code:'UR', name:'Urdu', desc:'Reading, writing and grammar with a focus on board exams.', detail:'Beginner: reading and vocabulary. Intermediate: grammar and comprehension. Advanced: essay and letter writing for board exams.'},
  {code:'MTH', name:'Mathematics', desc:'Arithmetic to calculus, taught with constant practice.', detail:'Beginner: arithmetic and basic algebra. Intermediate: geometry and trigonometry. Advanced: calculus and exam-style problem sets.'},
  {code:'ISL', name:'Islamyat', desc:'Core beliefs, history and daily practice, clearly explained.', detail:'Beginner: basic beliefs and pillars. Intermediate: seerah and history. Advanced: analytical and exam-focused study.'},
  {code:'BIO', name:'Biology', desc:'From cell structure to human physiology, with diagrams that stick.', detail:'Beginner: cells and classification. Intermediate: systems and genetics. Advanced: physiology and past-paper practice.'},
  {code:'PHY', name:'Physics', desc:'Concepts explained with real demonstrations, not just formulas.', detail:'Beginner: measurement and motion. Intermediate: forces and energy. Advanced: electromagnetism and numericals.'},
  {code:'CHM', name:'Chemistry', desc:'Reactions and concepts made intuitive through practice.', detail:'Beginner: matter and atomic structure. Intermediate: bonding and reactions. Advanced: organic chemistry and numericals.'},
  {code:'QUR', name:'Quran studies', desc:'Tajweed and Tafseer taught with patience, at every pace.', detail:'Beginner: correct pronunciation (Tajweed basics). Intermediate: fluent recitation. Advanced: Tafseer and memorization support.'}
];

const TEACHERS = [
  {name:'Sana Malik', subject:'English', exp:'9 years teaching secondary English', qual:'M.Phil English Literature', bio:'Focuses on building confident writers through weekly essay feedback.', rating:5, email:'sana@scholora.edu.pk', phone:'0301-1112222'},
  {name:'Hamza Farooq', subject:'Computer Science', exp:'6 years teaching programming', qual:'BS Computer Science', bio:'Believes every student can code — just needs the right first project.', rating:5, email:'hamza@scholora.edu.pk', phone:'0301-2223333'},
  {name:'Rabia Yousaf', subject:'Urdu', exp:'11 years teaching Urdu language and literature', qual:'M.A. Urdu', bio:'Known for making grammar rules finally make sense.', rating:4, email:'rabia@scholora.edu.pk', phone:'0301-3334444'},
  {name:'Imran Sheikh', subject:'Mathematics', exp:'14 years teaching O/A level Maths', qual:'M.Sc. Mathematics', bio:'Turns "I hate math" into "I get math" — one topic at a time.', rating:5, email:'imran@scholora.edu.pk', phone:'0301-4445555'},
  {name:'Ayesha Noor', subject:'Islamyat', exp:'7 years teaching Islamic studies', qual:'M.A. Islamic Studies', bio:'Blends history and reflection so lessons stay memorable.', rating:5, email:'ayesha@scholora.edu.pk', phone:'0301-5556666'},
  {name:'Waleed Iqbal', subject:'Biology', exp:'8 years teaching secondary and A-level Biology', qual:'M.Sc. Zoology', bio:'Uses diagrams and models so systems click visually.', rating:4, email:'waleed@scholora.edu.pk', phone:'0301-6667777'},
  {name:'Dr. Farhan Ali', subject:'Physics', exp:'15 years teaching Physics, ex-college lecturer', qual:'Ph.D. Physics', bio:'Ties every formula back to a real demonstration.', rating:5, email:'farhan@scholora.edu.pk', phone:'0301-7778888'},
  {name:'Mahnoor Riaz', subject:'Chemistry', exp:'10 years teaching Chemistry', qual:'M.Sc. Chemistry', bio:'Makes organic chemistry feel like solving a puzzle, not memorizing one.', rating:5, email:'mahnoor@scholora.edu.pk', phone:'0301-8889999'},
  {name:'Qari Abdul Rehman', subject:'Quran studies', exp:'20 years teaching Tajweed and Tafseer', qual:'Ijazah in Qira'+String.fromCharCode(39)+'at', bio:'Patient, structured recitation coaching for every age.', rating:5, email:'rehman@scholora.edu.pk', phone:'0301-9990000'}
];

const TESTIMONIALS = [
  {text:'My son went from failing Physics to scoring top marks in one term. The teacher actually checks understanding, not just attendance.', who:'Kamran S.', role:'Parent, Grade 11 student'},
  {text:'The Quran studies teacher is incredibly patient. I finally feel confident reading with correct Tajweed.', who:'Zainab R.', role:'Adult learner'},
  {text:'Small class sizes made all the difference for my daughter — she actually asks questions now instead of staying quiet.', who:'Adeel M.', role:'Parent, Grade 7 student'}
];

const FAQS = [
  {q:'What ages or grades do you teach?', a:'We teach students from primary grades through A-levels, as well as adult learners for Quran studies.'},
  {q:'Can I enroll in more than one subject?', a:'Yes — most students enroll in two to four subjects. You can select multiple subjects on the admission form.'},
  {q:'Do you offer trial classes?', a:'Yes, message us on WhatsApp to arrange a trial class before enrolling.'},
  {q:'What are your fees?', a:'Fees vary by subject and level. Our team will confirm exact pricing when you submit the admission form.'}
];

/* ===================== NAV ===================== */
function goPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav.links a').forEach(a=>a.classList.remove('active'));
  document.querySelectorAll(`nav.links a[href="#${id}"]`).forEach(a=>a.classList.add('active'));
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({top:0, behavior:'instant'});
  revealCheck();
}
function toggleNav(){ document.getElementById('navLinks').classList.toggle('open'); }
function toggleMode(){
  const root = document.documentElement;
  const isDark = root.getAttribute('data-mode') === 'dark';
  root.setAttribute('data-mode', isDark ? 'light' : 'dark');
  document.querySelector('#modeToggle i').className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

/* ===================== RENDER: SUBJECTS ===================== */
function subjectCard(s){
  return `<div class="index-card" onclick="this.classList.toggle('open')">
    <div class="badge">${s.code}</div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <div class="more">${s.detail}</div>
    <span class="toggle-hint">tap to expand ▾</span>
  </div>`;
}
document.getElementById('homeSubjectGrid').innerHTML = SUBJECTS.slice(0,4).map(subjectCard).join('');
document.getElementById('subjectGridFull').innerHTML = SUBJECTS.map(subjectCard).join('');

/* ===================== RENDER: TESTIMONIALS ===================== */
document.getElementById('testimonialGrid').innerHTML = TESTIMONIALS.map(t=>`
  <div class="testi reveal"><i class="fa-solid fa-quote-left"></i><p>${t.text}</p>
  <p class="who">${t.who}<span>${t.role}</span></p></div>
`).join('');

/* ===================== RENDER: TEACHERS ===================== */
const filterSelect = document.getElementById('teacherFilter');
[...new Set(TEACHERS.map(t=>t.subject))].forEach(s=>{
  const o = document.createElement('option'); o.value = s; o.textContent = s; filterSelect.appendChild(o);
});
function renderTeachers(){
  const q = document.getElementById('teacherSearch').value.toLowerCase();
  const sub = document.getElementById('teacherFilter').value;
  const list = TEACHERS.filter(t => t.name.toLowerCase().includes(q) && (!sub || t.subject === sub));
  document.getElementById('teacherGrid').innerHTML = list.map(t=>`
    <div class="teacher-card reveal in">
      <div class="avatar">${t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
      <h3>${t.name}</h3>
      <p class="subj">${t.subject}</p>
      <p class="meta">${t.qual} · ${t.exp}</p>
      <div class="stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
      <p class="bio">${t.bio}</p>
      <div class="contact-row"><span><i class="fa-solid fa-envelope"></i> ${t.email}</span></div>
    </div>
  `).join('') || `<p style="color:var(--muted);">No teachers match your search.</p>`;
}
renderTeachers();

/* ===================== SUBJECT SELECTS (student/admission/contact forms) ===================== */
['sSubjects','admissionSubjects'].forEach(id=>{
  const el = document.getElementById(id);
  SUBJECTS.forEach(s=>{ const o=document.createElement('option'); o.value=s.name; o.textContent=s.name; el.appendChild(o); });
});
const contactSubjectSelect = document.getElementById('contactSubject');
SUBJECTS.forEach(s=>{ const o=document.createElement('option'); o.value=s.name; o.textContent=s.name; contactSubjectSelect.appendChild(o); });

/* ===================== STUDENT DASHBOARD (in-memory only) ===================== */
let studentData = null;
function showDashTab(which){
  document.getElementById('panelRegister').classList.toggle('active', which==='register');
  document.getElementById('panelDashboard').classList.toggle('active', which==='dashboard');
  document.getElementById('tabBtnRegister').classList.toggle('active', which==='register');
  document.getElementById('tabBtnDashboard').classList.toggle('active', which==='dashboard');
  if(which==='dashboard') renderDashboard();
}
function saveStudent(e){
  e.preventDefault();
  const chosen = [...document.getElementById('sSubjects').selectedOptions].map(o=>o.value);
  studentData = {
    name: document.getElementById('sName').value,
    dob: document.getElementById('sDob').value,
    grade: document.getElementById('sGrade').value,
    subjects: chosen.length ? chosen : [SUBJECTS[0].name],
    address: document.getElementById('sAddress').value,
    guardian: document.getElementById('sGuardian').value,
    email: document.getElementById('sEmail').value,
    phone: document.getElementById('sPhone').value
  };
  showDashTab('dashboard');
  return false;
}
function renderDashboard(){
  if(!studentData){
    document.getElementById('dashEmpty').style.display='block';
    document.getElementById('dashContent').style.display='none';
    return;
  }
  document.getElementById('dashEmpty').style.display='none';
  document.getElementById('dashContent').style.display='block';
  document.getElementById('dashAvatar').textContent = studentData.name.split(' ').map(n=>n[0]).slice(0,2).join('');
  document.getElementById('dashName').textContent = studentData.name;
  document.getElementById('dashMeta').textContent = `${studentData.grade} · ${studentData.subjects.join(', ')}`;

  const levels = ['Beginner','Intermediate','Advanced'];
  document.getElementById('progressList').innerHTML = studentData.subjects.map((s,i)=>{
    const pct = 30 + (i*17)%60;
    const lvl = levels[Math.floor(pct/34)] || 'Advanced';
    return `<div class="progress-row"><span style="min-width:120px;">${s}</span>
      <div class="progress-bar"><span style="width:${pct}%;"></span></div>
      <span class="level-tag">${lvl}</span></div>`;
  }).join('');

  const days = ['Mon','Wed','Fri','Sat'];
  document.getElementById('scheduleList').innerHTML = studentData.subjects.map((s,i)=>`
    <div class="schedule-row"><span>${s}</span><span>${days[i%days.length]}, ${4+i}:00 PM</span></div>
  `).join('');
}

/* ===================== FAQ ===================== */
document.getElementById('faqList').innerHTML = FAQS.map(f=>`
  <div class="faq-item" onclick="this.classList.toggle('open')">
    <div class="q">${f.q}<i class="fa-solid fa-chevron-down"></i></div>
    <div class="a">${f.a}</div>
  </div>
`).join('');

/* ===================== FORM HANDLERS ===================== */
function handleContact(e){ e.preventDefault(); alert('Thanks — your message has been noted. We will contact you within a day.'); e.target.reset(); return false; }
function handleAdmission(e){ e.preventDefault(); alert('Application received — our admissions team will call to confirm your schedule.'); e.target.reset(); return false; }

/* ===================== STATS COUNT-UP ===================== */
function countUp(id, target, suffix=''){
  const el = document.getElementById(id); let cur = 0;
  const step = Math.max(1, Math.round(target/40));
  const t = setInterval(()=>{ cur += step; if(cur>=target){cur=target; clearInterval(t);} el.textContent = cur + suffix; }, 30);
}
countUp('statStudents', 1200, '+');
countUp('statTeachers', 24, '');
countUp('statSubjects', 9, '');
countUp('statYears', 12, '+');

/* ===================== SCROLL REVEAL ===================== */
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in'); });
},{threshold:0.15});
function revealCheck(){ document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); }
revealCheck();

/* ===================== BACK TO TOP ===================== */
window.addEventListener('scroll', ()=>{
  document.getElementById('toTop').style.display = window.scrollY > 400 ? 'flex' : 'none';
});
