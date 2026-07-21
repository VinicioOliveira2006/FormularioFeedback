/* ============================================================
   shared.js — dados e utilitários comuns às duas telas.
   Carregado DEPOIS de supabase.min.js e ANTES do script inline
   de cada página. Fonte ÚNICA das equipes/técnicos: editar aqui.
   ============================================================ */

/* ---- Config Supabase (a anon key é pública por design; a
        autorização real é feita pela RLS + allowlist no banco) ---- */
const SB_URL = 'https://xcdlnrjojcqpdafgxjvw.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZGxucmpvamNxcGRhZmd4anZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3OTU5MTMsImV4cCI6MjA5NzM3MTkxM30.H-5mjr2bTLa-AfAMGgcdUE0KkkPeJmJqUgwUBqvWU8E';
const db = supabase.createClient(SB_URL, SB_KEY);

/* ---- Escapa dados do banco antes de injetar em HTML (previne XSS armazenado) ---- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
  ));
}

/* ---- Só aceita data URI de imagem como src de assinatura ---- */
function safeSig(s){
  s = String(s || '');
  return /^data:image\/(png|jpeg|jpg|webp|gif);base64,[A-Za-z0-9+/=\s]+$/.test(s) ? s : '';
}

/* ---- Equipes técnicas (fonte única) ---- */
const EQUIPES = {
  "ARTHUR GOMES CRUZ": [
    "DEIVID HENRIQUE DA CUNHA ESTEVÃO","DIEGO SABINO DOS SANTOS","JUNIO CESAR DE AZEVEDO",
    "MARCIO JUNIOR MARTINS CEREZO","RODRIGO COUTINHO CRUZ","VICTOR HUGO ALVES PIMENTA GOMES",
    "DIEGO DAMASCENO MAGALHÃES"
  ],
  "IGO SAMUEL LIRA DOS SANTOS OLIVEIRA": [
    "JOSE EDSON NICACIO DA SILVA","KENNER DE SOUZA","RODRIGO FERNANDES DO CARMO",
    "SAMUEL DE PAULA SIMOES","WENDEL PEREIRA LIMA"
  ],
  "MILTON ANTONIO DA MOTA COSTA": [
    "ADRIAN JUNIOR DA CUNHA ESTEVAO","ALEXSANDER SILVA OLIVEIRA","ARTHUR EMANUEL ALMEIDA RAMOS",
    "LEONARDO MAGNO PEREIRA DA SILVA MIRANDA","VENICIO RODRIGUES DOS SANTOS",
    "CARLOS EDUARDO GONÇALVES DE CARVALHO","WESLLEY LOPES TRIGUEIRO"
  ],
  "WEVERTON GERALDO DOS SANTOS DUTRA": [
    "ALLAN MICHAEL ELIAS ALVES","CRISTIAN BERG DA SILVA SANTOS","EDGARD LOPES FERREIRA DA SILVA",
    "GABRIEL SOUZA DE MAGALHÃES","KAIO GABRIEL PIRES DA SILVA","SIDNEY CRISTIAN DA SILVA LIMA",
    "FELIPE PEREIRA GONÇALVES"
  ]
};

/* ---- Lista plana de técnicos, ordenada — DERIVADA das equipes acima
        (assim nunca mais fica fora de sincronia) ---- */
const TECNICOS = [...new Set(
  Object.values(EQUIPES).flat()
)].sort((a, b) => a.localeCompare(b, 'pt-BR'));

/* ---- "OUTRA EQUIPE": qualquer técnico da empresa (usado no formulário) ---- */
EQUIPES["OUTRA EQUIPE"] = TECNICOS;
