function DatabaseLinks() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="DatabaseLinks">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Contact</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#bedbff] text-[14px]">Adresă</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2px] w-[490px]">
        <p className="mb-0">{`Calea Dorobanţilor nr. 15-17, etajul 6, sala 2601, `}</p>
        <p className="mb-0">Sector 1, Bucureşti,</p>
        <p>Cod Poștal 010552</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph3() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#bedbff] text-[14px]">Telefon</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2px]">+40 21 319 19 00</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#bedbff] text-[14px]">Email</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2px]">dse@ase.ro</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function DatabaseLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[242px] items-start relative shrink-0 w-full" data-name="DatabaseLinks">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="relative rounded-[14px] size-full" data-name="Container" style={{ backgroundImage: "linear-gradient(148.696deg, rgb(21, 93, 252) 0%, rgb(25, 60, 184) 100%)" }}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-px items-start pb-0 pt-[20px] px-[32px] relative size-full">
          <DatabaseLinks />
          <DatabaseLinks1 />
        </div>
      </div>
    </div>
  );
}