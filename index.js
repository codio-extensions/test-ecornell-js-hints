// JS Test
(async function (codioIDE, window) {

  codioIDE.coachBot.register("customHintsJSv2", "JS hint button", onButtonPress)

  async function onButtonPress() {
    console.info("[JS Hint v2] getContext:start");
    const context = await codioIDE.coachBot.getContext();
    console.info("[Jupyter Hint v2] getContext:success", summarizeContext(context));

    const studentFile = context.files[0].content
    const guidePage = content.guidesPage.content
    
    const locatorResult = await codioIDE.coachBot.ask({
      systemPrompt: "You're a helpful assistant",
      userPrompt: "{% prompt 'AGENT_LOCATOR_COACH_JS' %}",
      vars: {
        STUDENT_FILE: studentFile
      }
    });
  }
})(window.codioIDE, window);
