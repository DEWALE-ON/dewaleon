const SUPABASE_URL = 'https://izfnbmukfhnvwgnngjzc.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_FsEZIzAKMHiyQw0j0Wc1zQ_4AgrOlx2';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
const jobs = [
  {id:1,title:'Registered Nurse',org:'Greenfield Specialist Hospital',location:'Ibadan',type:'Full-time',salary:'₦180k–₦250k / month',category:'Nursing',initials:'GH',tone:'',experience:'2+ years',description:'Support safe, compassionate care across a multidisciplinary clinical team.'},
  {id:2,title:'Medical Laboratory Scientist',org:'Pinnacle Diagnostics',location:'Lagos',type:'Full-time',salary:'₦220k–₦300k / month',category:'Laboratory',initials:'PD',tone:'lilac',experience:'3+ years',description:'Perform diagnostic testing and contribute to accurate, timely laboratory results.'},
  {id:3,title:'Community Pharmacist',org:'WellSpring Pharmacy',location:'Abeokuta',type:'Full-time',salary:'₦160k–₦230k / month',category:'Pharmacy',initials:'WP',tone:'sand',experience:'2+ years',description:'Provide patient-centred pharmacy services, counselling and safe dispensing.'},
  {id:4,title:'Medical Officer',org:'Horizon Family Clinic',location:'Akure',type:'Contract',salary:'₦350k–₦500k / month',category:'Medicine',initials:'HF',tone:'lilac',experience:'3+ years',description:'Deliver outpatient consultations and coordinate care with the clinical team.'},
  {id:5,title:'Staff Nurse — Outpatient',org:'Oakwell Medical Centre',location:'Osogbo',type:'Part-time',salary:'₦90k–₦130k / month',category:'Nursing',initials:'OM',tone:'sand',experience:'1+ year',description:'Support outpatient clinics, patient education and clinical documentation.'},
  {id:6,title:'Radiographer',org:'ClearView Imaging Centre',location:'Ado-Ekiti',type:'Full-time',salary:'₦200k–₦280k / month',category:'Diagnostics',initials:'CI',tone:'',experience:'2+ years',description:'Conduct imaging procedures and maintain high standards of patient safety.'}
];
const people = [
  {name:'Amara Okafor',initials:'AO',profession:'Registered Nurse',specialty:'Emergency & critical care',location:'Ibadan',experience:'5 years',skills:'Triage, patient assessment, clinical documentation'},
  {name:'Tunde Adebayo',initials:'TA',profession:'Medical Laboratory Scientist',specialty:'Haematology & diagnostics',location:'Lagos',experience:'6 years',skills:'Quality control, laboratory safety, diagnostics'},
  {name:'Zainab Bello',initials:'ZB',profession:'Pharmacist',specialty:'Community pharmacy',location:'Abeokuta',experience:'4 years',skills:'Patient counselling, dispensing, medication safety'},
  {name:'David Eze',initials:'DE',profession:'Medical Doctor',specialty:'Family medicine',location:'Akure',experience:'7 years',skills:'Outpatient care, clinical assessment, referrals'},
  {name:'Kemi Adeyemi',initials:'KA',profession:'Midwife',specialty:'Maternal & newborn care',location:'Ibadan',experience:'8 years',skills:'Antenatal care, birth support, health education'},
  {name:'Folasade James',initials:'FJ',profession:'Radiographer',specialty:'Diagnostic imaging',location:'Lagos',experience:'3 years',skills:'Patient positioning, imaging protocols, safety'}
];
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const toast = (message) => { const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>el.classList.remove('show'),3000); };
function jobCard(job){return `<article class="job-card"><div class="job-card-top"><span class="org-mark ${job.tone}">${job.initials}</span><button class="save-btn" data-save="${job.id}" aria-label="Save ${job.title}" title="Save job">♡</button></div><h3>${job.title}</h3><div class="org-name">${job.org} · ${job.location}</div><p style="font-size:10px;color:#718583;line-height:1.7;margin:0">${job.description}</p><div class="job-tags"><span class="tag">${job.type}</span><span class="tag">${job.experience}</span><span class="tag">${job.category}</span></div><div class="job-card-bottom"><span class="salary">${job.salary}</span><button data-apply="${job.id}">View role →</button></div></article>`}
function jobRow(job){return `<article class="job-row"><span class="org-mark ${job.tone}">${job.initials}</span><div><h3>${job.title}</h3><div class="org-name">${job.org} · ${job.location}</div><div class="job-tags"><span class="tag">${job.type}</span><span class="tag">${job.experience}</span><span class="tag">${job.category}</span></div><p style="font-size:10px;color:#718583;line-height:1.65;margin:8px 0 0">${job.description}</p></div><div class="job-row-actions"><span class="salary">${job.salary}</span><button data-apply="${job.id}">View role →</button></div></article>`}
function renderJobs(){ $('#featuredJobs').innerHTML=jobs.slice(0,3).map(jobCard).join(''); filterJobs(); }
function filterJobs(){const q=($('#jobSearch')?.value||'').toLowerCase().trim();const loc=$('#locationFilter')?.value||'';const type=$('#typeFilter')?.value||'';const filtered=jobs.filter(j=>(!q||`${j.title} ${j.org} ${j.category} ${j.description}`.toLowerCase().includes(q))&&(!loc||j.location===loc)&&(!type||j.type===type));$('#allJobs').innerHTML=filtered.length?filtered.map(jobRow).join(''):'<div class="empty-state"><strong>No matching sample roles</strong>Try another keyword, location or job type.</div>';$('#jobCount').textContent=`${filtered.length} sample ${filtered.length===1?'role':'roles'} shown`;}
function renderPeople(){const q=($('#peopleSearch')?.value||'').toLowerCase().trim();const loc=$('#peopleLocation')?.value||'';const filtered=people.filter(p=>(!q||`${p.name} ${p.profession} ${p.specialty} ${p.skills}`.toLowerCase().includes(q))&&(!loc||p.location===loc));$('#peopleGrid').innerHTML=filtered.length?filtered.map((p,i)=>`<article class="person-card"><div class="person-avatar">${p.initials}</div><h3>${p.name}</h3><div class="profession">${p.profession}</div><p>${p.specialty}<br>${p.location} · ${p.experience}</p><div class="person-meta"><span class="tag">Sample profile</span></div><button class="btn btn-outline" data-contact="${i}">View profile</button></article>`).join(''):'<div class="empty-state"><strong>No matching sample profiles</strong>Try a different profession or location.</div>';}
function setView(name){const valid=['home','jobs','professionals','employers','community'].includes(name)?name:'home';$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${valid}`));$$('[data-view]').forEach(a=>a.classList.toggle('nav-active',a.dataset.view===valid));$('#mainNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});if(valid==='jobs')filterJobs();if(valid==='professionals')renderPeople();}

function openDialog(kind = 'signup') {
  const dialog = $('#actionDialog');
  const form = $('#interestForm');
  const title = $('#dialogTitle');
  const desc = $('#dialogText');
  const feedback = $('#formFeedback');

  const isLogin = kind === 'login';

  title.textContent = isLogin ? 'Welcome back' :
    kind === 'employerSignup' ? 'Hire healthcare talent' :
    'Join the community';

  desc.textContent = isLogin
    ? 'Log in with the email and password you registered with.'
    : kind === 'employerSignup'
      ? 'Create an employer account. Verification is required before publishing vacancies.'
      : 'Create your DEWALEON account.';

  form.style.display = ['signup', 'employerSignup', 'login'].includes(kind)
    ? 'grid'
    : 'none';

  form.dataset.mode = isLogin ? 'login' : 'signup';

  form.querySelector('button[type="submit"]').textContent =
    isLogin ? 'Log in' : 'Create account';

  form.elements.password.autocomplete =
    isLogin ? 'current-password' : 'new-password';

  feedback.textContent = '';
  dialog.showModal();
}
document.addEventListener('click',e=>{const view=e.target.closest('[data-view]');if(view){e.preventDefault();setView(view.dataset.view);return;}const action=e.target.closest('[data-action]');if(action){openDialog(action.dataset.action);return;}const apply=e.target.closest('[data-apply]');if(apply){openDialog('apply');return;}const contact=e.target.closest('[data-contact]');if(contact){openDialog('contact');return;}const save=e.target.closest('[data-save]');if(save){save.classList.toggle('saved');save.textContent=save.classList.contains('saved')?'♥':'♡';toast(save.classList.contains('saved')?'Saved in this demo session.':'Removed from saved jobs.');return;}});
$('#menuToggle').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));});
$('#searchJobs').addEventListener('click',filterJobs);$('#jobSearch').addEventListener('input',filterJobs);$('#locationFilter').addEventListener('change',filterJobs);$('#typeFilter').addEventListener('change',filterJobs);$('#searchPeople').addEventListener('click',renderPeople);$('#peopleSearch').addEventListener('input',renderPeople);$('#peopleLocation').addEventListener('change',renderPeople);

$('#interestForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const feedback = $('#formFeedback');
  const submitButton = form.querySelector('button[type="submit"]');

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const role = form.elements.role.value;
  const password = form.elements.password.value;

  feedback.textContent = 'Creating your account...';
  submitButton.disabled = true;

  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
  emailRedirectTo: 'https://dewale-on.github.io/dewaleon/',
  data: {
    full_name: name,
    role: role
  }
      }
    });

    if (error) throw error;

    feedback.textContent = data.session
      ? 'Account created! You can now continue to DEWALEON.'
      : 'Registration started! Check your email for a confirmation link before logging in.';

    form.reset();
  } catch (error) {
    feedback.textContent = error.message || 'Registration failed. Please try again.';
  } finally {
    submitButton.disabled = false;
  }
});
renderJobs();renderPeople();

const jobPostingForm = document.getElementById('jobPostingForm');

async function loadSavedJobs() {
  try {
    const { data, error } = await supabaseClient
      .from('jobs')
      .select('id, title, description, facility_name, city, employment_type, qualification_required, salary')
      .eq('status', 'published');

    if (error) throw error;

    if (data && data.length) {
      const savedJobs = data.map(job => ({
        id: job.id,
        title: job.title,
        org: job.facility_name,
        location: job.city,
        type: job.employment_type,
        salary: job.salary || 'Pay not specified',
        category: job.qualification_required || 'Healthcare',
        initials: (job.facility_name || 'DH').substring(0, 2).toUpperCase(),
        tone: '',
        experience: job.qualification_required || 'See requirements',
        description: job.description
      }));

      jobs.unshift(...savedJobs);
      renderJobs();
    }
  } catch (error) {
    console.error('Could not load published jobs:', error.message);
  }
}

if (jobPostingForm) {
  jobPostingForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!jobPostingForm.reportValidity()) return;

    const feedback = document.getElementById('jobPostingFeedback');
    const submitButton = jobPostingForm.querySelector('button[type="submit"]');
    const formData = new FormData(jobPostingForm);

    const { data: { user }, error: userError } =
      await supabaseClient.auth.getUser();

    if (userError || !user) {
      feedback.textContent = 'Please log in before submitting a vacancy.';
      openDialog('login');
      return;
    }

    submitButton.disabled = true;
    feedback.textContent = 'Checking employer access...';

    try {
      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select('role, employer_verified')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;

      if (profile.role !== 'employer' || profile.employer_verified !== true) {
        feedback.textContent =
          'Your employer account must be verified before you can publish vacancies.';
        return;
      }

      const facility = String(formData.get('facility_name')).trim();

      const vacancy = {
        employer_id: user.id,
        title: String(formData.get('title')).trim(),
        facility_name: facility,
        city: String(formData.get('city')).trim(),
        employment_type: formData.get('employment_type'),
        qualification_required: String(
          formData.get('qualification_required')
        ).trim(),
        salary: String(formData.get('salary') || '').trim(),
        description: String(formData.get('description')).trim(),
        status: 'published'
      };

      feedback.textContent = 'Saving vacancy...';

      const { data, error } = await supabaseClient
        .from('jobs')
        .insert(vacancy)
        .select()
        .single();

      if (error) throw error;

      const savedJob = {
        id: data.id,
        title: data.title,
        org: data.facility_name,
        location: data.city,
        type: data.employment_type,
        salary: data.salary || 'Pay not specified',
        category: data.qualification_required || 'Healthcare',
        initials: facility.substring(0, 2).toUpperCase(),
        tone: '',
        experience: data.qualification_required || 'See requirements',
        description: data.description
      };

      jobs.unshift(savedJob);
      renderJobs();
      jobPostingForm.reset();
      feedback.textContent = 'Vacancy saved and published successfully.';
    } catch (error) {
      console.error('Vacancy submission failed:', error);
      feedback.textContent =
        error.message || 'Could not save vacancy. Please try again.';
    } finally {
      submitButton.disabled = false;
    }
  });
}

loadSavedJobs();

if (jobPostingForm) {
  
jobPostingForm.addEventListener('submit', function (event) {
  event.preventDefault();

