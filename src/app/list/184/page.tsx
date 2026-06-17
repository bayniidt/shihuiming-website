import Banner from "@/components/Banner";
import ContentSection from "@/components/ContentSection";

export default function Page184() {
  return (
    <>
      <Banner title="科技创新" bgImage="/images/banner-bg.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul />
          </div>
        </div>
      </div>
      <ContentSection
        title="广东光泰防锈科技有限公司 精于专业 工于匠心"
        text="凯盟研发室、实验室成立于2005年，一直致力于金属表面处理与绿色环保的新技术、新工艺和前瞻性技术研究与开发，自主创新能力强。成立以来，&ldquo;两室&rdquo;承担了公司大量的表面处理课题研发任务，并且在科研项目中与各高校院所等合作，实现人才、专业、试验装备优势互补，各项科研成果攻克了诸多行业技术难题，为行业关键、共性技术研究和瓶颈技术突破作出了较大贡献。"
        cards={[
          { image: "/images/keyan1.jpg", title: "实验室1", delay: "0.1s" },
          { image: "/images/keyan2.jpg", title: "实验室2", delay: "0.15s" },
          { image: "/images/keyan3.jpg", title: "研发室1", delay: "0.1s" },
          { image: "/images/keyan4.jpg", title: "研发室2", delay: "0.15s" },
        ]}
      />
    </>
  );
}
