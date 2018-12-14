import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.google.gson.*;

public class Servlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String sb = "";
        String line = null;

        BufferedReader reader = req.getReader();
        while ((line = reader.readLine()) != null)
            sb += line;

        Gson gson = new Gson();
        Equation eq = gson.fromJson(sb,Equation.class);
        if(eq.getA()!= 0) {
            eq.solve();
        }
        String json = gson.toJson(eq);
        resp.setContentType("text/xml");
        resp.setHeader("Cache-Control","no-cache");
        resp.getWriter().write(json);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}

